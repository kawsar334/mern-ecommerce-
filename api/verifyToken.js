import jwt from "jsonwebtoken";


export const verifyToken = async(req, res, next)=>{
    const authHeader = req.headers.token 
    if(authHeader){
        const token = authHeader.split(" ")[1];
             jwt.verify(token, process.env.SECRET, (err, user)=>{
        if(err){
            return res.status(403).json("token is not valid !");
        }else{
            req.user = user;
            next();
        }
    })
    }else{
        return res.status(401).json("you are not authenticated !")
    };
};


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

