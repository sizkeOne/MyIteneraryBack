import {Schema, model, Types} from "mongoose";

const citySchema = Schema({

    photo: { type: String, required: true}    ,
    name:  { type: String, required: true}    ,
    population:  { type: String, required: true}  ,
    language:  { type: String, required: true}   
},{
    timestramps: true
})

const City = model('cities', citySchema)

export default City