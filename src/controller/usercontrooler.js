const user = require('../models/user_model');

const bcrypt = require('bcrypt');
const SECRET_KEY="NOTES_API";

const jwt=require('jsonwebtoken');
const { use } = require('bcrypt/promises');

const signUp = async (req, res) => {
    const {email, password, username}=await req.body;


    try {
        const existingUser = await user.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json("user already exist");
        }
        
        try {
            const existingUserName = await user.findOne({ username: username });
            if (existingUserName) {
                return res.status(400).json("This is username is already in use");
            }
            
            const hashedPassword=await bcrypt.hash(password, 10);

            const result =await user.create({
                email: email,
                password: hashedPassword,
                username: username
            });

            const token=jwt.sign({email: result.email, username: result.username, userId: result.userId},SECRET_KEY);
            res.status(200).json({
                user: result,
                token: token
            })


        } catch (error) {
            console.log(error);
            return res.status(400).json(error);


        }
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);

    }

}

const signIn = async (req, res) => {

    try {
        const {email, password}=req.body;
    const existingUser=await user.findOne({email: email});
    if(!existingUser){
        return res.status(404).json("user not found");
    }

    const ans=await bcrypt.compare(password, existingUser.password);
    if(!ans){
        return res.status(400).json("wrong credentials");
    }

    const token=jwt.sign({email: email, username: existingUser.username, userId: existingUser.userId},SECRET_KEY);
    res.status(200).json({
        token: token,
        user: existingUser
    });
        
    } catch (error) {
        console.log(error);
    }

    

}


module.exports = { signIn, signUp };