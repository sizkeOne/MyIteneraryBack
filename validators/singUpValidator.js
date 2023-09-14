import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
    min: 5,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2,
  };

export const signUpSchema = joi.object({
    name: joi.string().min(3).max(40).messages({
      "string.min":"Name min characters is 3"
    }),
    email: joi.string().email().required().messages({
      "string.empty": "email no shoul empty",
      "any.required": "Email is required"
    
    }),
    password: joiPwd(complexityOptions),
    photo: joi.string().uri(),
    birth_date: joi.date().max(Date.now()),
    age: joi.number().min(0).max(65),
    verified: joi.boolean()
})