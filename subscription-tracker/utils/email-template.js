export const generateEmailTemplate = ({
    userName,
    subscriptionName,
    renewalDate,
    planName,
    price,
    paymentMethod,
 
})=> `
<h1> hello ${userName} </h1>
<p> you have <strong>${subscriptionName}</strong> subscription for plan ${planName}</p>
<p>${renewalDate}</p>
<p>its worth ${price} ( your preffered payment method ${paymentMethod})</p>
`;

export const emailTemplates = [
    {
        label:"7 days before reminder",
        generateSubject: (data) => `📅 Reminder: your ${data.subscriptionName} Subscription Renews in 7 days! `,
        generateBody:(data)=> generateEmailTemplate({userName,subscriptionName,renewalDate,planName,price,paymentMethod})
    },
    {
        label:"5 days before reminder",
        generateSubject: (data) => `📅 Reminder: your ${data.subscriptionName} Subscription Renews in 5 days! `,
        generateBody:(data)=> generateEmailTemplate({userName,subscriptionName,renewalDate,planName,price,paymentMethod})
    },
    {
        label:"2 days before reminder",
        generateSubject: (data) => `🚀 2 days left! ${data.subscriptionName} Subscription Renewal`,
        generateBody:(data)=> generateEmailTemplate({userName,subscriptionName,renewalDate,planName,price,paymentMethod})
    },
    {
        label:"1 days before reminder",
        generateSubject: (data) => `⚡ final Reminder ${data.subscriptionName} Renews tomorrow `,
        generateBody:(data)=> generateEmailTemplate({userName,subscriptionName,renewalDate,planName,price,paymentMethod})
    },
  
]