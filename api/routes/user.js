import express from "express";
const router = express.Router();

import { updateUser, deleteUser, getAllUsers, getUser, getUserStats  } from "../controllers/user.js";
import { verifyToken, veritokenAndAutorization, verifyTokenAndAdmin } from "../verifyToken.js";
//UPDATE USER 
router.put("/:id", veritokenAndAutorization, updateUser);

//DELETE USER 
router.delete("/:id", veritokenAndAutorization,deleteUser);
//GET  A USER
router.get("/find/:id", verifyTokenAndAdmin,getUser); 
//GET ALL USER 
router.get("/",verifyTokenAndAdmin, getAllUsers);
router.get("/stats", verifyTokenAndAdmin, getUserStats);







export default router; 