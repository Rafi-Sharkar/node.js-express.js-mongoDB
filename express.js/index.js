const express = require('express')

const app = express()

//  read body data in post method. there have 4type:: 1. row, json, text, urlencoded. we don't need to do buffer handle in this case.
// app.use(express.json())
// app.use(express.text())
// app.use(express.urlencoded())

// make a particular diractory as static diractory.Here public is static diractory.
// app.use(express.static(__dirname+'/public/',{index:'home.html'}))   // index: when call by dir then by default return this file

// we can use express.Router() to route url.
const router = express.Router({
    caseSensitive: true
})     // by default router is not case-Sensitive
app.use(router)

router.get('/',(req, res)=>{
    res.send("Hellow, this is get method. by router")
})
router.get('/HOme',(req,res)=>{
    res.send("this, is home directory")
})

/*
// When we use get, post, put, delete method using app
app.get('/',(req,res)=>{
    res.send('This is home page to GET')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('This is home page to POST')
})
app.put('/',(req,res)=>{
    res.send('This is home page to PUT')
})
app.delete('/',(req,res)=>{
    res.send('This is home page DELETE')
})
*/

app.listen(5000, ()=>{
    console.log("Server start at 5000 port")
})