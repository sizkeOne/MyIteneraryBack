import { Router } from "express";
import citiesRouter from "./citiesRouter.js"
import categoriesRouter from "./categoriesRouter.js"
const indexRouter = Router()





indexRouter.get('/', (request, response, next) =>{

        response.send('Servidor de Moletto en /api')
    })

    
indexRouter.use('/cities', citiesRouter)
indexRouter.use('/categories', categoriesRouter)


export default indexRouter 