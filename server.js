const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();

require("dotenv").config();

app.set("view engine","ejs");





const PORT = process.env.PORT || 5500; 
const IP = process.env.IP || "0.0.0.0";

app.get("/",(req,res) => {
    res.render("getin/");
})

app.listen(PORT, IP, (err) =>{
    console.log(`SERVER IS RUNNING AT: localhost:${5500}`);
});
