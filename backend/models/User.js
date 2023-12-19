const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String, 
    phone_number: String, 
    position: String,
    location: String, 
    interviewFirst: {type: Boolean, default: false},
    interviewSecond:  {type: Boolean, default: false},
    notes: {type: String, defualt: null}, 
    rate: {type: Number, default: 25},
    whenIWork: {type: Boolean, default: false},
    newTek: {type: Boolean, default: false},
    training: {type: Boolean, default: false},
    schedule: {type: Boolean, default: false},
    sDate: {type: Date, default: null},
    eDate: {type: Date, default: null},
    training: {type: Boolean, default: false},
    notes: {type: String, default: null},
    hired: {type: Boolean, default: false},
    preferedLocations: {type: Array, default: []}
})

module.exports = mongoose.model("User", UserSchema)

// Need to add more and store properly