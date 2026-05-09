const express = require('express');

//now to show the file dirctly into the screen from the backend we use the directory 

const path = require("path");
// const fileURLToPath  = require("url");
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/public/index.html"));
})

app.post("/submit",(req,res)=>{
    console.log(req.body);
})
app.listen(5000,() =>{
    console.log("Server is running on port 5000");
})