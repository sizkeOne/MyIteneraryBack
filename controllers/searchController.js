import { request, response } from "express"
import cities from '../cities.js'; 
import City from "../Models/City.js";
   

const searchController = {
    



getCitiesByName: async (request,response, next) =>{
    const { name } = request.params
   const   query = {}
query.name = {$regex:`^${name}`, $options: 'i' }
    let cities;
    let error = null;
    let success = true;

 


try {
    cities = await City.find(query) 
    
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
}
}

export default searchController