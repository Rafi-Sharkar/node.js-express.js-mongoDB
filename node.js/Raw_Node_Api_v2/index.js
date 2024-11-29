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
const data = require('./lib/data')
const { result } = require('lodash')

// app object - module scaffolding
const app = {}

// testing CRUD
// test create file with data
data.create('test', 'newFile', {name: 'Rafi Sharkar', age: 23, university: 'IUB', depertment: 'CSE'}, (err)=>{
    console.log(`error was `, err)
})

//test read file data
data.read('test','newFile', (err, result)=>{
    console.log(`error is "${err}"\n`, result)
})

// test update file data
data.update('test', 'newFile', {name: "Hasan Al Banna", age: 23,university:"IUB", depertment: "CS"}, (err)=>{
    console.log(err)
})

// test delete file
data.delete('test', 'newFile', (err)=>{
    console.log(err)
})


// create server and listering that server at "app.config.port" or 3000 port 
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(environment.prot, ()=>{
        console.log(`listen to port ${environment.port}`)
    })
}

app.createServer()