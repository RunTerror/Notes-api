const jwt=require('jsonwebtoken');
const SECRET_KEY="NOTES_API";


 const auth=async (req, res, next)=>{
    try {

        let token=req.headers.authorization;
        if(!token){
            return res.status(400).json("unauthorized user");
        }
        token=token.split(" ")[1];
        const usercredentials=jwt.verify(token, SECRET_KEY);
        req.userId=usercredentials.userid;
        console.log(req.userId);
        console.log("authorized user");
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
}

module.exports=auth;