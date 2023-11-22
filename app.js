const express=require("express");
const mongoose=require("mongoose");
const path=require("path");

const app=express();

mongoose.connect('mongodb://localhost:27017/todolist').then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000,()=>{
    console.log("port started on 3000");
})