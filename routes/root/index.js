const express = require("express");
const router = express.Router();



router.get("/", (req,res)=>{
    res.render("home");
});

router.get("/getin",(req,res) => {
    res.render("getin");
});


module.exports = router;
