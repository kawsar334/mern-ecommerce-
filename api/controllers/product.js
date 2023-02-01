// addProduct, updateProduct, deleteProduct, getAllProducts, getProduct,
import { Product } from "../models/Product.js"

//ADD PRODUCT
export const addProduct = async(req, res, next)=>{
    try{
        const newProduct = new Product({...req.body});
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)

    }catch(err){
        next(err);
    }
}

//UPDATE PORDUCT
export const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id , {$set:req.body}, {new:true});
        res.status(200).json(updatedProduct);

    } catch (err) {
        next(err);
    }
}


//DELETE PORDUCT
export const deleteProduct = async (req, res, next) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            res.status(403).json("product not not found");
        }else{
            res.status(200).json("product deleted sucessfullly ")
        }

    } catch (err) {
        next(err);
    }
}

//get PORDUCT
export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
}

//get all  PORDUCT
export const getAllProducts = async (req, res, next) => {
    const qNew = req.query.new ;
    const qCategory = req.query.category;
    try {
        let products ;
     if(qNew){
         products = await Product.find().sort({createdAt:-1});
     }else if(qCategory){
         products = await Product.find({categories:{$in:[qCategory]}})
     }else{
         products = await Product.find();
     }
     res.status(200).json(products);

    } catch (err) {
        next(err);
    }
}

