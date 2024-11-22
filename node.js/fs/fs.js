const fs = require('fs')

fs.writeFileSync('myfile.txt', "hellow, Rafi Sharkar. ");
fs.appendFileSync('myfile.txt', "How are you?");

// syncronous way
// const read_myfile = fs.readFileSync('myfile.txt')   // it return buffer
// console.log(read_myfile.toString())

// default or asyncronous way
fs.readFile('myfile.txt', (err, data)=>{
    console.log(data.toString())
})

console.log("check asyncronous or not")