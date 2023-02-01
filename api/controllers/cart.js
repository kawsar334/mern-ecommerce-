
import {Cart} from "../models/Cart.js";

// addCart, updateCart, deleteCart, getAllCarts, getCart,

//add cart 
export const addCart = async(req, res, next)=>{
    try{
        const cart = new Cart({...req.body, userId:req.user.id})
        const saveCart = cart.save();

        res.status(200).json(saveCart)
    }catch(err){
        next(err);
    }
};
//update cart 
export const updateCart = async (req, res, next) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set:req.body} , {new:true});
        res.status(200).json(updatedCart)
      
    } catch (err) {
        next(err);
    }
};
//delete cart 
export const deleteCart = async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully !")
    } catch (err) {
        next(err);
    }
};
