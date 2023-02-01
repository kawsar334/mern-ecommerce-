import express from "express";
import env from "dotenv";
import { database } from "./db.js";
env.config();
const PORT = process.env.PORT ;
const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";





app.use(cors());
app.use(express.json());
app.use(cookieParser());




app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);





//MIDDLEWARE 
app.use((err, req, res, next)=>{
    const message = err.message || "something went wrong";
    const status = err.status  || 500;
    
    return res.status(status).json({
        message,
        status, 
        success:false,
    });
});

//connection database 
database();

//connecting server 
app.listen(PORT, ()=>{
    console.log(`server running on port number ${PORT}`)
})
