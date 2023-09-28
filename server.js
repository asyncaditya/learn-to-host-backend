const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send("success")
})

app.listen(2000,()=>{
    console.log("Up and running")
})