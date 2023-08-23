import { request, response } from "express"
import cities from '../cities.js'; 
import City from "../Models/City.js";


const citiesController = {
getAllCities: async (request,response, next) =>{
    let cities;
    let error = null;
    let success = true;
try {
    cities = await City.find() 
    response.json({
        response: cities,
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
 getOneCity: async (request,response, next) =>{
    const { id } = request.params
    console.log(id);
    let cities;
    let error = null;
    let success = true;
try {
    cities = await City.find({ _id:id   }) 
    
} catch (err) {
    console.log(err);
    success = false;
    error = err;
}
 
    response.json({
        response: cities,
        success: true,
        error: null
})

 } ,

 createOneCity:async(request,response, next) =>{
    console.log(request.body);
    let city;
    let error = null
    let success = true
   try {
 city = await City.create(request.body)
   console.log(city);
   
}


catch (err) {
    console.log(err);
    success = false;
    error = err
   }
    
    response.json({
response:city,
        success, 
        error 
 })
},

updateOneCity : async(request,response,next)=>{
    const {id} = request.params
    let cities;
    let error = null;
    let success = true;
    try {
       
 cities = await City.findOneAndUpdate({_id: id}, request.body, {new : true})
response.json({
    response: cities,
    success,
    error
})    
} catch (error) {
    console.log(err);
    success = false;
    error = err;
    }

},

deleteOneCity : async(request,response,next)=>{
    response.send('ok')
},

 }
export default citiesController