const fs = require('fs')

const myRS = fs.createReadStream(`${__dirname}/bigdata.txt`)
const myWS = fs.createWriteStream(`${__dirname}/output.txt`)

// menually by event listening
// myRS.on('data',(chunk)=>{
//     myWS.write(chunk)
// })

// we can do it with pipe
myRS.pipe(myWS)


console.log('done')
