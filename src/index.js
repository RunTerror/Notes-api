const express=require("express");
const noteRouteer = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT || 2000;

app.use("/users", userRouter);
app.use("/note",noteRouteer);
app.get('/', (req, res)=>{
    res.send("This api is created by Abhishek Bansal");
})

mongoose.connect("mongodb+srv://bansalabhishek7411:AbhiZ12@cluster0.pl5gsl7.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(PORT, (req,res)=>{
        console.log("server started at"+PORT);
    });
}).catch((eroor)=>{
    console.log(eroor);
})




