const express = require('express')

const app = express()


app.get('/json',(req,res)=>{
    res.json({"Json":"Success"})
})

app.get('/html',(req,res)=>{
    res.send('<h1>Test HTML Succeeded</h1>')
})

app.listen(5000,()=>{
    console.log("Listening on port 5000");
})
