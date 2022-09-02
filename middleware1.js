// require('dotenv').config();
// const express=require("express")
// const server=express();
// const logger=require("morgan");

// server.use(express.static(process.env.STATIC_FOLDER))
// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.path)
//     next();
// })
// server.use(logger());

// server.get("/homepage",(req,res)=>{
//     res.json({name:"priya"})
// })

// server.listen(process.env.PORT,()=>{
//     console.log("server started at",process.env.PORT)
// })





const express=require("express");
const app=express();

const middleware=(req,res,next)=>{
    console.log("welcome to middleware")
    next();
}

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/about",middleware,(req,res)=>{
    res.send("about page")
})
app.get("/contact",(req,res)=>{
    res.send("cantact page")
})
app.get("*",(req,res)=>{
    res.send("page not found")
})

app.listen(4400)