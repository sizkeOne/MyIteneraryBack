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

export const signInSchema = joi.object({
    name: joi.string().min(3).max(40).messages({
      "string.min":"email min characters is 7"
    }),
    email: joi.string().email().required().messages({
      "string.empty": "email no should empty",
      "any.required": "Email is required"
    
    }),
    password: joiPwd(complexityOptions),
    
})