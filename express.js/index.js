const express = require('express')
const adminRouter = require('./adminRouter')

const app = express()

app.get('/',(req,res)=>{
    res.send('This is home page')
})
app.get('/service',(req,res)=>{
    res.send('This is home service')
})

app.listen(3000, ()=>{
    console.log("Server port 3000")
})