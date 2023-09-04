import {Schema, model, Types} from "mongoose";

const tinerarySchema = Schema({

    photo: { type: String, required: true},
    name:{type: String, required: true},
    nameCity:[{ type: Types.ObjectId, ref:"city",required: true}],
    userName:{type: String, required: true},
    userPhoto:{type: String, required: true},
    duration:  { type: String, required: true},
    price:  { type: String, required: true}  ,
    likes:  { type: String, required: true}  ,
    tags:  [{ type: String, required: true}],
    comments :  { type: String, required: true}   

},{
    timestramps: true
})

const Tinerary = model('tinerary', tinerarySchema)

export default Tinerary