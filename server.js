const express = require("express");

const app = express();
app.get("/",function(req, response){
    response.send("<h1>hello, world</h1>");
});
app.get("/contact",function(req,res){
    res.send("contact me at : vaibhavgupta@gmail.com");
});
app.get("/about",function(req,res){
    res.send("i am vaibhav this side");
});
app.get("/hobbie",function(req,res){
    res.send("badminton");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
