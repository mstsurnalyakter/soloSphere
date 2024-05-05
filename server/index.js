const express = require('express');
const cors = require('cors');
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials:true,
  optionSuccessStatus:200,
};

//middleware setup
app.use(express.json());
app.use(cors(corsOptions))


app.get("/",(req,res)=>{
    res.send("I am from Home route")
})


app.listen(port, ()=>{
    console.log(`Server is running at : http://localhost:${port}`);
})