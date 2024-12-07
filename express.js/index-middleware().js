/*
type of middleware___
    --> application level middleware
    --> router level middleware
    --> error-handling middleware
    --> built-in middleware
    --> third-party middleware
*/

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
// app.use(express.json())     // this built-in middleware
// app.use(cookieParser)       // this third-party middleware

const admin = express.Router()


const logger = (req, res, next)=>{
    console.log("this is logger")
    console.log("This is application level middleware route")
    next()
}
const loggerWrapper = (options) => {
    function error (req, res, next){
        if(options.log){
                console.log("this is logger one")
                console.log("This is router level middleware route")
                next() 
        }else{
                throw new Error("Error handle");  
                       
        }
    }
} 

// app.use(logger)
admin.use(loggerWrapper({log: true}))

admin.get('/dashboard', (req, res)=>{
    res.send("End Get method of admin")
})

app.use('/admin',admin)

app.get('/mid',(req, res)=>{
    res.send("End Get method of app")
})

const errorMiddleware = (err, req, res, next)=>{
    console.log(err.message)
    res.status(500).send("there was a server side error !!")
}

admin.use(errorMiddleware)

app.listen(3000, ()=>{
    console.log("Server prot 3000")
})
