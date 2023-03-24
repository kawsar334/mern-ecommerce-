import jwt from "jsonwebtoken";


export const verifyToken = async(req, res, next)=>{
    
    const token = req.cookies.token
    console.log(token) ;
    if(!token){ 
        
        return res.status(403).json("You are Not authenticated  !");
    }else{
        jwt.verify(token, process.env.SECRET,(err, user)=>{
            if(err){
                return res.status(403).json("Invalid Token !")

            }
            req.user = user;
            next(); 
        })
    }}


//VERIFYTOKEN AND AUTHORIZATION 
export const veritokenAndAutorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return res.status(403).json("you are not allowed!");
        }
    })
}


//VERIFY TOKEN AND ADMIN 
export const verifyTokenAndAdmin = (req, res, next)=>{
        verifyToken(req, res, ()=>{
            if(req.user.isAdmin){
                next();
            }else{
                return res.status(403).json("you are not allowed!");
            }
        })
}

