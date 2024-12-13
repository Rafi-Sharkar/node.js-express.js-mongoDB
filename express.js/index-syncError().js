/**
 * there have two type of error handling. 
 *      --> synchronous
 *      --> asynchronous
 */

const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send("This is app get")
    // throw new Error("There was an error");
    // res.send("no error")
})

// 404 error handler
app.use((req, res, next)=>{
    next("Request url was not found!!!")
})

// invisible default error handling middleware. this middleware function must be call last
app.use((err, req, res, next)=>{
    if(err.message){
        res.status(500).send(err.message)
    }else{
        res.status(500).send('There was an error!!')
    }
})


app.listen(3000, ()=>{
    console.log("Server port 3000")
})