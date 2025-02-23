const mongoose =require("mongoose")

const BookingSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Mendatory"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email Field is Mendatory"]
    },
    phone:{
        type:String,
        required:[true,"Phone Field is Mendatory"]
    },
    car:{
        type:String,
        required:[true,"Car Field is Mendatory"]
    },
    pickup:{
        type:String,
        required:[true,"Pickup Field is Mendatory"]
    },
    drop:{
        type:String,
        required:[true,"Drop Field is Mendatory"]
    },
    pickupDate:{
        type:String,
        required:[true,"PickupDate Field is Mendatory"]
    },
    date:{
        type:String,
        
    },
    active:{
        type:Boolean,
        default:true
    }
})

const Booking =new mongoose.model("Booking",BookingSchema)
module.exports = Booking