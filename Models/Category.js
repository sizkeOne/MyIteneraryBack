import {Schema, model, Types} from "mongoose";

const categorySchema  = Schema({

    category: { type: String, required: true}    ,
    description:  { type: String, required: true}   
},{
    timestramps: true
})

const Category = model('cities', categorySchema)

export default City