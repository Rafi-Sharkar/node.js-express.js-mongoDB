/*
Title: Uptime monitoring API.
Description: ARESTFul API to monitor up or down time of user defined links
Author: Rafi SharKar
Date: 24/11/2024
Requirement Analysis::
    1. Start the API Server.
    2. Creare, Edit, Delete User
    3. Token based authentication
    4. Logout Mechanism
    5. Set link & Up/Down
    6. Edit/Delete link & rate limit
    7. Check up/down time
*/

// dependencies
const http = require('http')
const url = require('url')
const { StringDecoder } = require('string_decoder')

// app object - module scaffolding
const app = {}

// configuration
app.config = {
    port: 3000
}

// create server
app.createServer =()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`Listening to port ${app.config.port}`)
    })
}

// handle Request Response
app.handleReqRes = (req,res)=>{
    // request handle

    // get the url and parse it
    const parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)  // check what are in parsedUrl

    const path = parsedUrl.pathname;
    console.log(path)

    const trimedPath = path.replace(/^\/+|\/+$/g, '')   // this is ragular experasion. topic of theory of computation(automata)
    console.log(trimedPath)

    const method = req.method.toLowerCase()     // see the method(get, post, copy, put, delete, option, Link)
    console.log(method)

    const queryStringObject = parsedUrl.query    // after the '?' all string
    console.log(queryStringObject)

    const headerObject = req.headers;       // it give all mata data
    console.log(headerObject)

    // req.method = body
    const decoder = new StringDecoder( 'utf-8' )
    let realData = ''

    req.on('data', (buff)=>{
        realData += decoder.write(buff)
    })

    req.on('end',()=>{
        realData += decoder.end()
        console.log(realData)
        res.end("Hellow, Uptime monitoring")
    })

    // response handle
    // res.end("Hellow, Uptime monitoring")

}

// start the server
app.createServer()