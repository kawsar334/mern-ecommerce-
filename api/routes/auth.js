import express from "express";

import { Register, Login } from "../controllers/auth.js";
const router = express.Router();



//SIGNUP 
router.post("/register", Register);
//SIGNIN
router.post("/login", Login);



export default router ; 