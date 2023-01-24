import express from "express";
const router = express.Router();

import { addOrder, updateOrder, deleteOrder, getAllOrders, getOrder,income } from "../controllers/Order.js";
import { verifyToken, veritokenAndAutorization, verifyTokenAndAdmin } from "../verifyToken.js";

//CREATE Order
router.post("/addOrder", verifyToken, addOrder)
//UPDATE Order 
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//DELETE Order 
router.delete("/:id,", verifyTokenAndAdmin, deleteOrder);
//GET  A Order
router.get("/find/:id",verifyToken, getOrder);
//GET ALL Order 
router.get("/",verifyTokenAndAdmin, getAllOrders);

router.get("/icome", income)





export default router; 