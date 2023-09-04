import {Schema, model, Types} from "mongoose";

const citySchema = Schema({

    photo: { type: String, required: true}    ,
    nameCity:{type: String, required: true},
    country : {type:  String, required:true},
    description:{type: String, required: true},
    name:  { type: String, required: true}    ,
    population:  { type: String, required: true}  ,
    language:  { type: String, required: true}   
},{
    timestramps: true
})

const City = model('city', citySchema)

export default City