const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const admin = express.Router()
// app.use(express.json())
app.use(express.text())
app.use(cookieParser())

admin.get('/dashboard/:id', (req,res)=>{
    console.log('RUL:',req.url)
    console.log('baseURL:',req.baseUrl)
    console.log('originalURL:',req.originalUrl)
    console.log('path:',req.path)
    console.log('hostname:',req.hostname)
    console.log('IP:',req.ip)
    console.log('method:',req.method)
    console.log('protocol:',req.protocol)
    console.log('parameter:',req.params)
    console.log('query:',req.query)
    console.log('cookies:',req.cookies)
    console.log('secure:',req.secure)
    console.log('route:',req.route)
    res.send("we are in admin dashboard")
})

app.use('/admin', admin)

app.get('/',(req,res)=>{
    console.log(req.url)
    console.log(req.baseUrl)
    console.log(req.originalUrl)
    console.log(req.path)
    res.send("Hellow, We are starting request object")
})

app.post('/edit', (req, res)=>{
    console.log(req.body)
    console.log('accept:',req.accepts('json'))
    console.log('content-type:', req.get('content-type'))
    res.send("this is for edit")
})

app.listen(3000, ()=>{
    console.log("Server port 3000")
})