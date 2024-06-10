const express = require("express");
const router = express.Router();




router.post("/getin",(req,res) => {
    res.render("getin");
});


module.exports = router;
