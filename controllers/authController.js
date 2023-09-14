import User from "../Models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const authController = {

    signUp: async (req, res, next) => {
        try {
            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            console.log(passwordHash);
            let body = { ...req.body }
            body.password = passwordHash

            const newUser = await User.create(body)
            const compare = bcrypt.compareSync(req.body.password, newUser.password)
            console.log(compare);
            return res.status(201).json({
                success: true,
                userData: newUser,
                message: "Sign up successfully"
            })



        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    signIn: async (req, res, next) => {
        try {

            let { email:emailBody, password } = req.body

            const userInDB = await User.findOne({ email:emailBody })

            if (!userInDB) {
                throw new Error("No user exists with this email")

            }
            let passwordValidated = bcrypt.compareSync(password, userInDB.password)

            if (!passwordValidated) {
                throw new Error("The email or password is incorrect")
            }
            let {email, name, photo} = userInDB
            const token = jwt.sign({email, name}, process.env.SECRET_KEY, {expiresIn:'1h'})
            return res.status(200).json({
                success: true,
                userData:{email, name, photo},
                token: token,
                message: "Sing in succesfully"
            })
        } catch (error) {
            console.log(error);
            next(error)
        }

    


    },

    loginWithToken: (req, res) => {
const {email, photo,name} = req.user
res.status(200).json({
    success: true,
    userData:{email, name, photo}, 
    message: "Sing in succesfully"
})

    }


}
export default authController;
