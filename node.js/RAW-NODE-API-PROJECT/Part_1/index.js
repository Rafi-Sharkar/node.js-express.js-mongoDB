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
const { handleReqRes } = require('../Helpers/handleReqRes')

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
app.handleReqRes = handleReqRes;

// start the server
app.createServer()