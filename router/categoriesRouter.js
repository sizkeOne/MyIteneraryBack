import { Router } from "express";
import categoriesController from "../controllers/categoriesController.js";

const categoriesRouter = Router()
const {getAllCategories, getOneCategories, createOneCategories, updateOneCategories, deleteOneCategories} = categoriesController;


categoriesRouter.get('/', getAllCategories)
categoriesRouter.post('/', createOneCategories )
categoriesRouter.get('/:id', getOneCategories)
categoriesRouter.put('/:id', updateOneCategories)
categoriesRouter.delete( '/:id', deleteOneCategories)
export default categoriesRouter 