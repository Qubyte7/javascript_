// we are going to use serve from upstash and because of its implementation /
// it requires us to import using normal way of  === > require ()
// but because we have switched our 'type' : module we only import dependencies using  " import "
// So to override this and use require in our case we follow bellow process .
import { createRequire} from 'module';
import Subscription from '../models/subscription.model';
import dayjs from 'dayjs';
import { sendReminderEmail } from '../utils/send-email.js';
const require = createRequire(import.meta.url);

// so we are now ready to use require 
const {serve}  = require('@upstash/workflow/express');

// reminder periods in day; we have 3 reminders
const REMINDERS = [7,5,2,1];

export const sendReminders = serve(async(context)=>{
    const  {subscriptionId} =  context.requestPayload;
    const subscription = await fetchSubscription(context,subscriptionId);

    if (!subscription || subscription.status != 'active') return ;
    
    const renewalDate = dayjs(subscription.renewalDate);

    // if renewalDate is before the current date we exit 
    if(renewalDate.isBefore(dayjs())){
        console.log(`Renewal Date has passed for scubscription ${subscriptionId}. Stopping workflow. `);
        return;
    }

    
    for (const daysBefore of REMINDERS){
        const reminderDate =  renewalDate.subtract(daysBefore, 'day');
        if(reminderDate.isAfter(dayjs())){ // daysjs() ==> returns the current date 
            await sleepUntilReminder(context,`${daysBefore} days before reminder`,reminderDate);
        }
        await triggerReminder(context,`${daysBefore} days before reminder`,subscription,);
    }

});

const fetchSubscription = async (context,subscriptionId) =>{
    return await context.run('get subscription', async()=>{
        return Subscription.findById(subscriptionId).populate('user','name email');
    })
}


const sleepUntilReminder = async(context,label,date)=>{
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label,date.toDate());
    
}


const triggerReminder =  async (context,label,subscription) => {
    return await context.run(label,async()=>{
        console.log(`Trigger ${label} reminder`);
        // send email, SMS, push notification etc.
        await sendReminderEmail({
            to:subscription.user.email,
            type: label,
            subscription,
             
    })


    })
}
