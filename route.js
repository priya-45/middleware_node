module.exports= reqfilter=(req,res,next)=>{
    if (!req.query.age){
        res.send("Please provide age")
    }
    else if (req.query.age<18){
        res.send("you are under aged")
    }
    else{
    next()
    }
}





