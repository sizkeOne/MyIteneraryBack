import { request, response } from "express"
import cities from '../cities.js'; 
import City from "../Models/City.js";
import Tinerary from "../Models/Tinerary.js";
   

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
    cities = await City.find({ _id:id}) 
    
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

 createOneCity : async(request,response, next) =>{
    console.log(request.body);
    let city;
    let error = null
    let success = true
   try {
    
    let aux =  await Tinerary.find({nameCity : request.body.nameCity})
    const query = {... request.body}
    query.nameCity = aux._id 
    console.log(query);

    city = await City.create(query)
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
    let success = true;
    try {
       
 cities = await City.findOneAndUpdate({_id: id}, request.body, {new : true})
response.json({
    response: cities,
    success
})    
} catch (error) {
    console.log(err);
    success = false;
   next(err)
    }

},

deleteOneCity:  async(request,response,next)=>{
    const {id} = request.params
    let cities;
    let success = true;
    try {
       
 cities = await City.findOneAndDelete({_id: id}, request.body, {new : true})
response.json({
    response: cities,
    success
})    
} catch (error) {
    console.log(err);
    success = false;
   next(err)
    }

},
 }
export default citiesController