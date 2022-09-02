const express=require('express')
const app =express()
// const reqfilter=require("./middleware")
// const route=express.Router();

reqfilter=(req,res,next)=>{
    if (!req.query.age){
        res.send("Please provide age")
    }
    else if (req.query.age<18){
        res.send("you are undr aged")
    }
    else{
    next()
    }
}
app.use(reqfilter)
app.get('/',(req,res)=>{
    res.send("Welcome to home page")      // application middleware route
})


app.get('/user',(req,res)=>{
    res.send("welcome to user page")
})


app.get('/about',(req,res)=>{
    res.send("welcome to about page")
})
app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
})
app.listen(4000)