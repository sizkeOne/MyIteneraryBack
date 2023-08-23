import 'dotenv/config.js'
import express, { request, response } from "express"
import indexRouter from "./router/IndexRouter.js"
 import cors from 'cors'
import './config/database.js'
import errorHandler from './middlewares/errorHandler.js'
import notFoundHandler from './middlewares/notFoundHandler.js'


const server = express()


server.use(cors())
server.use(express.json())

server.use('/api',(request,response,next)=>{
    console.log("Se realizo una peticion")
    console.log(request.method)
    next()
}, indexRouter)

server.get('/', (request, response, next) =>{

    response.send('Servidor de Moletto')
})

server.use(notFoundHandler)
server.use(errorHandler)
server.listen(process.env.PORT, () => { console.log('Server start in port ' + process.env.PORT) })
