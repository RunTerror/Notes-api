
const express=require('express');
const noteRouteer= express.Router();

noteRouteer.get('/',(req,res)=>{
    res.send("get notes res");

});

noteRouteer.post('/',(req,res)=>{
    res.send("post notes res");

});


module.exports=noteRouteer;