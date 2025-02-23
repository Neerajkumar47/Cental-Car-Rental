const mongoose =require("mongoose")

const CarSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Mendatory"]
    },
    rating :{
        type:Number,
        required:[true,"Rating Field is Mendatory"]
    },
    rent :{
        type:Number,
        required:[true,"Rent Field is Mendatory"]
    },
    seatingCapacity:{
        type:String,
        required:[true,"Seating Field is Mendatory"]
    },
    mode:{
        type:String,
        required:[true,"Mode Field is Mendatory"]
    },
    fuelType:{
        type:String,
        required:[true,"FuelType Field is Mendatory"]
    },
    pic:{
        type:String,
        required:[true,"Pic Field is Mendatory"]
    },
    active:{
        type:String,
        default:true
    }
})

const Car =new mongoose.model("Car",CarSchema)
module.exports = Car