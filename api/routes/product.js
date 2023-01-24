import express from "express";
const router = express.Router();

import { addProduct, updateProduct, deleteProduct, getAllProducts, getProduct,  } from "../controllers/Product.js";
import { verifyToken, veritokenAndAutorization, verifyTokenAndAdmin } from "../verifyToken.js";

//CREATE PRODUCT
router.post("/addProduct",verifyTokenAndAdmin, addProduct)
//UPDATE Product 
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//DELETE Product 
router.delete("/:id,", verifyTokenAndAdmin, deleteProduct);
//GET  A Product
router.get("/find/:id", getProduct);
//GET ALL Product 
router.get("/",getAllProducts);







export default router; 