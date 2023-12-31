import { Router } from "express";
import tineraryController from "../controllers/tineraryController.js"; 

const TinerariesRouter = Router()
const {getAllTineraries, getOneTinerary, createOneTinerary, updateOneTinerary, deleteOneTinerary, } = tineraryController;


TinerariesRouter.get('/', getAllTineraries)
TinerariesRouter.post('/', createOneTinerary)
TinerariesRouter.get('/:id', getOneTinerary)
TinerariesRouter.put('/:id', updateOneTinerary)
TinerariesRouter.delete( '/:id', deleteOneTinerary)


export default TinerariesRouter  