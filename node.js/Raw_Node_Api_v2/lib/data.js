/*
* Title: Data Crud 
* Description:  Crud all data 
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// dependencies
const fs = require('fs')
const path = require('path')

// module scaffolding
const lib = {}

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/')

// write data to file. 4 parameter --> dir of '.data' 
lib.create = (dir, file, data, callBack) => {
    // open file for write
    fs.open(lib.basedir+dir+'/'+file+'.json', 'wx', (err, fileDescriptor)=>{
        if(!err && fileDescriptor){
            // convert data to string
            const stringData = JSON.stringify(data)

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err1)=>{
                if(!err1){
                    fs.close(fileDescriptor, (err2)=>{
                        if(!err2){
                            callBack(false)
                        }else{
                            callBack("Error closing the new file")
                        }
                    })
                }else{  
                    callBack("Error writing to new file")
                }
            })
        }else{
            callBack('Could not create new file, it may already exists!')
            // callBack(err)  // actual error
        }
    })
}


// read data from file
lib.read = (dir, file, callBack) => {
    fs.readFile(`${lib.basedir+dir}/${file}.json`, 'utf-8', (err, data)=>{
        callBack(err, data)
    })
}


// update existing file
lib.update = (dir, file, data, callBack) => {
    // open file
    fs.open(`${lib.basedir+dir}/${file}.json`, 'r+', (err, fileDescriptor)=>{
        if (!err && fileDescriptor){
            // convert data to sting
            const stringData = JSON.stringify(data)

            // truncate the file
            fs.ftruncate(fileDescriptor, (err1)=>{
                if(!err1){
                    // write to the file and close it 
                    fs.writeFile(fileDescriptor, stringData, (err2)=>{
                        if (!err2){
                            // close the file
                            fs.close(fileDescriptor, (err3)=>{
                                if(!err3){
                                    callBack(false)
                                }else{
                                    callBack("Error closing file")
                                }
                            })
                        }else{
                            callBack("Error writing to file")
                        }
                    })
                }else{
                    callBack("Error truncating file!")
                }
            })

        }else(
            callBack(`Error updating. file may not exist`)
        )
    })
}

// delete existing file
lib.delete = (dir, file, callBack) => {
    // unlink file
    fs.unlink(`${lib.basedir+dir}/${file}.json`, (err)=>{
        if(!err){
            callBack(false)
        }else{
            callBack("Error deleting file")
        }
    })
}




module.exports = lib