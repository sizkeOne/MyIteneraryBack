import { Router } from "express";
import authController from "../controllers/authController.js";
import { signUpSchema } from "../validators/singUpValidator.js";
import validator from "../middlewares/validator.js";
import { emailExists } from "../middlewares/emailExist.js";
import { signInSchema } from "../validators/singInValidator.js";
import passport from "../middlewares/passport.js";


const authRouter = Router()
const {signUp, signIn, loginWithToken} = authController 

authRouter.post('/up',  validator(signUpSchema),emailExists,  signUp )
authRouter.post('/in', signIn )
authRouter.get('/token', passport.authenticate('jwt',{session:false}), loginWithToken )


export default authRouter  