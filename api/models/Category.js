import mongoose from "mongoose";



const CategorySchema = new mongoose.Schema({

 userId:{
    type:String,
    required:true
 },
 products:[
    {
        productId:{
            type:String
        },
        quantity:{
            type:Number,
            default :1
        }
    }
 ]

}, { timestamps: true });


export const Category = mongoose.model("Category", CategorySchema)