const router=require("express").Router()
const Todo=require("../models/product");

router.get("/",async (req,res)=>{
    const alltodo= await Todo.find({});
    res.render("index",{todo:alltodo});
})



module.exports=router;