const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();



//server settings
app.use(express.static("public"));  // set static
app.set("view engine","ejs");       // set view Engine 



//importing routes
const mainRoutes = require("./routes/root");



// routes declares
app.use("/", mainRoutes)



// ports and address 
const PORT = process.env.PORT || 5500; 
const IP = process.env.IP || "0.0.0.0";


app.listen(PORT, IP, (err) =>{
    console.log(`SERVER IS RUNNING AT: localhost:${5500} \nPublic IP 192.168.1.2:5500`);
});
