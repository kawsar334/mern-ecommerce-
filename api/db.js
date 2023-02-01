import mongoose from "mongoose";


export const database = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("database connected ")
    }).catch((err)=>{
        console.log(err);
    })
}

