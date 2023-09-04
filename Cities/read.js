import { response } from "express";
import City from "../Models/City.js";

async function read (req,res, next ){
    try {
        let queries= {}
        if(req.query.name){
            queries.name = req.query.name
        }
        let all = await City.find(queries)
        return res.status(200).json({ 
            success:true,
            response: all
        })
        
    } catch (error) {
        next(error)
    }
}