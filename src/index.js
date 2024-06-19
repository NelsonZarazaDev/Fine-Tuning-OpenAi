const express = require("express");
const cors = require('cors');

const apiRoute = require("./routes/route");

const app=express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRoute);
app.listen(PORT, ()=>{console.log("EL PUERTO ES: "+PORT)})