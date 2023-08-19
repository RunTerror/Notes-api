const express=require("express");
const noteRouteer = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose=require('mongoose');

const app=express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/note",noteRouteer);

mongoose.connect("mongodb+srv://bansalabhishek7411:AbhiZ12@cluster0.pl5gsl7.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(3000, (req,res)=>{
        console.log("server started at 3000");
    });
}).catch((eroor)=>{
    console.log(eroor);
})




