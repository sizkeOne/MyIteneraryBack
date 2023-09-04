import { Router } from "express";
import citiesRouter from "./citiesRouter.js"
import searchRouter from "./searchRouter.js";
import TinerariesRouter from "./tinerariesRouter.js";
 
const indexRouter = Router()





indexRouter.get('/', (request, response, next) =>{

        response.send('Servidor de Moletto en /api')
    })

    
indexRouter.use('/cities', citiesRouter)
indexRouter.use('/cities/search', searchRouter )
indexRouter.use('/tineraries', TinerariesRouter )


export default indexRouter 