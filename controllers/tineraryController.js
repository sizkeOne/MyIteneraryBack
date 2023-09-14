import { request, response } from "express"
import tineraries from "../tineraries.js";
import Tinerary from "../Models/Tinerary.js";
   

const tineraryController = {
getAllTineraries: async (request,response, next) =>{
    let tineraries;
    let error = null;
    let success = true;
try {
    tineraries = await Tinerary.find().populate({
        path:'nameCity',
        select:'nameCity'
    }) 

    response.json({
        response: tineraries,
        success,
        error
})
} catch (err) {
    console.log(err);
    success = false;
    error = err;
    next(err)
}

    
 },  

getTineraryByCity:async (request,response, next) =>{
    let tineraries;
    let error = null;
    const {id} = request.params
    let success = true;
try {
    tineraries = await Tinerary.find( {nameCity:id })

    response.json({
        response: tineraries,
        success,
        error
})
} catch (err) {
    console.log(err);
    success = false;
    error = err;
    next(err)
}

    
},


 getOneTinerary: async (request,response, next) =>{
    const { name } = request.params
   console.log(name)
    const query = {}
    query.name = {$regex:`^${name}`}
    
    let tineraries;
    let error = null;
    let success = true;


try {
    tineraries = await Tinerary.find(query) 
    
} catch (err) {
    console.log(err);
    success = false;
    error = err;
}
 
    response.json({
        response: tineraries,
        success: true,
        error: null
})

 } ,

 createOneTinerary : async(request,response, next) =>{
    console.log(request.body);
    let tinerary;
    let error = null
    let success = true
   try {    
    tinerary = await Tinerary.create(tineraries)
   console.log(tineraries);
   
}

catch (err) {
    console.log(err);
    success = false;
    error = err
   }
    
    response.json({
response:tinerary,
        success, 
        error 
 })
},

updateOneTinerary : async(request,response,next)=>{
    const {id} = request.params
    let tineraries;
    let success = true;
    try {
       
        tineraries = await Tinerary.findOneAndUpdate({_id: id}, request.body, {new : true})
response.json({
    response: tineraries,
    success
})    
} catch (error) {
    console.log(err);
    success = false;
   next(err)
    }

},

deleteOneTinerary:  async(request,response,next)=>{
    const {id} = request.params
    let tineraries;
    let success = true;
    try {
       
 tineraries = await Tinerary.findOneAndDelete({_id: id}, request.body, {new : true})
response.json({
    response: tineraries,
    success
})    
} catch (error) {
    console.log(err);
    success = false;
   next(err)
    }

},
 }
export default tineraryController