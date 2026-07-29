const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required: true,
            trim: true
        },

        username:{
            type:String,
            required: true,
            unique: true,
            trim: true
        },

        mobileNumber:{
            type: String,
            required: true,
            unique: true,
        },

        password:{
            type:String,
            required: true,
        },

        role:{
            type: String,
            default: "staff"
        }
    },{timestamps:true});

module.exports = mongoose.model("User", userSchema);