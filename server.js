const express = require('express');
const app = express()

let arr = []

app.get('/',(req,res)=>{
    res.send("success")
})

app.post('/insert',(req,res)=>{
    let random = Math.floor(Math.random()*10)
    arr.push(random)
    res.send(arr)
})

app.listen(2000,()=>{
    console.log("Up and running")
})