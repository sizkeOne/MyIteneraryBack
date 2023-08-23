import mongoose from "mongoose";

mongoose.connect("mongodb+srv://SizkeOne:BDMolettoG@myitenerarymg.w74yzcy.mongodb.net/")

.then(()=>{
    console.log("Database connected");
})

.catch(()=>{
    console.log("Database connection failed");
})