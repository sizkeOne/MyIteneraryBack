import { Router } from "express";
import citiesRouter from "./citiesRouter.js"
const indexRouter = Router()





indexRouter.get('/', (request, response, next) =>{

        response.send('Servidor de Moletto en /api')
    })

    
indexRouter.use('/cities', citiesRouter)
    


export default indexRouter 