const express = require('express')
const fs = require('fs')
const app = express()

app.get('/',[
    (req, res, next)=>{
    fs.readFile('/file-does-not-exist','utf-8', (err, data)=>{
        console.log(data)
        next(err)
    })
},
(req, res, next)=>{
    console.log(data.property)
}])

app.listen(3000, ()=>{
    console.log("Server port 3000")
})