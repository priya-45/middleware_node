const express=require('express')
const app =express()
const reqfilter=require("./route")
const route=express.Router();

route.use(reqfilter)
route.get('/',(req,res)=>{
    res.send("Welcome to home page")      // hum jis bhi route pe middleware lagana chahte hai waha laga sakte hai
})

app.get('/user',(req,res)=>{
    res.send("welcome to user page")
})

app.get('/about',(req,res)=>{
    res.send("welcome to about page")
})
route.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
})
app.use("/",route)
app.listen(4500)