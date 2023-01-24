import express from "express";
const router = express.Router();

import { addCart, updateCart, deleteCart, getAllCarts, getCart, } from "../controllers/Cart.js";
import { verifyToken, veritokenAndAutorization, verifyTokenAndAdmin } from "../verifyToken.js";

//CREATE Cart
router.post("/addCart", verifyToken, addCart)
//UPDATE Cart 
router.put("/:id", veritokenAndAutorization, updateCart);

//DELETE Cart 
router.delete("/:id,", veritokenAndAutorization, deleteCart);
//GET  A Cart
router.get("/find/:userId", verifyTokenAndAdmin, getCart);
//GET ALL Cart 
router.get("/", verifyTokenAndAdmin, getAllCarts);







export default router; 