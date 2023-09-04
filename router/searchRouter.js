import { Router } from "express";
import searchController from "../controllers/searchController.js";

const searchRouter = Router()
const {getCitiesByName } = searchController

searchRouter.get( '/:name', getCitiesByName)

export default searchRouter;