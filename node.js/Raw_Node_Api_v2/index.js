/*
* Title:  
* Description:  
* Author: Rafi Sharkar 
* Date: dd/mm/2025
*/

// dependencies
const http = require('http')
const { handleReqRes } = require('./helpers/handleReqRes')
const environment = require('./helpers/environments')

// app object - module scaffolding
const app = {}

// create server and listering that server at "app.config.port" or 3000 port 
app.createServer = () => {
    console.log(environment)
    const server = http.createServer(handleReqRes);
    server.listen(environment.prot, ()=>{
        console.log(`listen to port ${environment.port}`)
    })
}

app.createServer()