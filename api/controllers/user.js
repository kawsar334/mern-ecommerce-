// updateUser, deleteUser, getAllUsers, getUser, getUserStats 

import { User } from "../models/User.js";


//UPDATE USER
export const updateUser=async(req, res, next)=>{
    try{

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
}
//DELETE USER
export const deleteUser = async(req, res, next)=> {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            return res.status(403).json("user not found");
        }else{
            res.status(200).json("user  deleted succesfully !")
        }       
    } catch (err) {
        next(err);
    }
}


//GET USER
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(403).json("user not found!");
        }else{

          return   res.status(200).json(user);
        }
    } catch (err) {
        next(err);
    }
}
//GET ALL USERS 
export const getAllUsers = async(req, res, next)=> {

    const query = req.query.new  ;

    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
        res.status(200).json(users)
        
    } catch (err) {
        next(err);
    }
}
 
//GET USER STATS 
export const getUserStats = async(req, res, next)=> {
    try {
        res.status(200).json("updated");

    } catch (err) {
        next(err);
    }
}