const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();



// view engine set to ejs
app.set("view engine","ejs");


//importing routes
const mainRoutes = require("./routes/root");



// ports and address 
const PORT = process.env.PORT || 5500; 
const IP = process.env.IP || "0.0.0.0";


// routes declares
app.use("/", mainRoutes)


app.listen(PORT, IP, (err) =>{
    console.log(`SERVER IS RUNNING AT: localhost:${5500} \nPublic IP 192.168.1.2:5500`);
});
