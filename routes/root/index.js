const express = require("express");
const router = express.Router();



router.get("/", (req,res)=>{
    res.send("home page");
})

router.get("/getin",(req,res) => {
    res.render("getin");
});


module.exports = router;
