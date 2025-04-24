import mongoose from "mongoose";

// the word ( this ) refer to the current model properties

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Subscription name is required !'],
        trim: true,
        minLength:2,
        maxLength: 100,
    },
    price:{
        type: Number,
        required:[true,'Subscription price is required !'],
        min: [0, ' price must be greater than zero']
    },
    currency:{
        type:String,
        enum: ['USD', 'RWF','EUR','GBP','SHR'],

    },
    frequency:{
        type:String,
        enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    category:{
        type:String,
        enum:['sports','entertainment','lifestyle','technology','finance','politics','other'],
    },
    paymentMethod:{
        type:String,
        required:[true,"Indicate a payment method"],
        trim:true,
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        default: 'active',
    },
    startDate:{
        type:Date,
        required:[true,"provide the subscription start date"],
        validate:{
            validator: (value) => value <= new Date(),
            message: 'Start date must be in the past'
        }
    },
    renewalDate:{
        type:Date,
        validate:{
            validator: (value) => value > this.startDate,
            message: 'Renewal date must be after the start date'
        }
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,"Provide a user Id"],
        index:true,
    }


},{timestamps:true}) 



subscriptionSchema.pre('save',(next)=>{
    //Auto-calculate renewal date if missing
    if(!this.renewalDate){
        const renewalPeriods = {
            daily:1,
            weekly:7,
            monthly: 30,
            yearly: 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() +  renewalPeriods[this.frequency])
    }

    //Auto-calculating state

    if (this.renewalDate < new Date()){
        this.status = 'expired'
    }

    next(); // proceed with the creatation of this document in the database
})


const Subscription = mongoose.model('Subscription',subscriptionSchema);

export default Subscription;
