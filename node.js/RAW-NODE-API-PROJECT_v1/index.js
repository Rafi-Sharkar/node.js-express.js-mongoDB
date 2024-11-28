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
const { handleReqRes } = require('./Helpers/handleReqRes')
const environment = require('./Helpers/environments')
const data = require('./lib/data')

// app object - module scaffolding
const app = {}

// data create
data.create('test', 'newFile',{'name':"Bangladesh", 'language':"Eng1"}, (err)=>{console.log("error was", err)})

// read data
// data.read('test/', 'newFile', (err, result)=>{
//     console.log(err, result)
// })

// update data
data.update('test', 'newFile',{name: "England", language: "English"} , (err)=>{
    console.log(err)
})

// delete file
data.delete('test', 'newFile', (err)=>{
    console.log(err)
})

//

// configuration. we are going to import environtment variable for replace this
// app.config = {
//     port: 3000
// }

// create server
app.createServer =()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(environment.port, ()=>{
        console.log(`Listening to port ${environment.port}`)
    })
}

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer()