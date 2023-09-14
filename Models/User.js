import {Schema, model } from "mongoose";

const userSchema = Schema({
    name: {type: String, required: true},
    email:  {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, default: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"},
    birth_date: {type: Date},
    age: {type: Number},
    verified: {type: Boolean, default: false}
}, 
{
    timestamps: true
})
const User = model('user', userSchema)

export default User