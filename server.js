const path = require("path");
const express = require("express");
const app = express();

require("dotenv").config();






const PORT = process.env.PORT || 5500; 
const IP = process.env.IP || "0.0.0.0";



app.listen(PORT, IP, (err) =>{
    console.log(`SERVER IS RUNNING AT: localhost:${5500}`);
});
