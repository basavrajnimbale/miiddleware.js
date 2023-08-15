let express= require("express");
let router = express.Router();
const rootDir = require('../util/path');
const path = require("path");


router.get("/shop",(req,res)=>{
    res.send("<h1>Welcome to the shop</h1>")
})

router.get("/contactus",(req,res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
})
router.post("/success",(req,res)=>{
    console.log(req.body)
    res.sendFile(path.join(rootDir,"views", "successMess.html"))
})
module.exports = router;