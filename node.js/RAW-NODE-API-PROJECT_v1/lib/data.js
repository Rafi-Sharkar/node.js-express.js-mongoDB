// dependencies
const fs = require('fs')
const path = require('path')

const lib = {}

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create =(dir, file, data, callBack)=>{
    // open file for writing
    fs.open(lib.basedir+dir+'/'+file+'.json', 'wx', (err,fileDescriptor)=>{
        if (!err && fileDescriptor){
            // convert data to staring
            const stringData = JSON.stringify(data)

            // write data to filr and then close it
            fs.writeFile(fileDescriptor, stringData,(err0)=>{
                if (!err0){
                    fs.close(fileDescriptor, (err1)=>{
                        if (!err1){
                            callBack(false)
                        }else{
                            callBack("Error1 writing to new file")
                        }
                    })
                }else{
                    callBack("Error0 writing to new file")
                }
            })
        }else{
            callBack('Could not create new file, it may already exist!')
        }
    })
}

// read data 
lib.read = (dir, file, callBack)=>{
    fs.readFile(`${lib.basedir+dir+'/'+file+'.json', 'utf8', (err, data)=>{
        callBack(err,"not", data)
    }}`)}

//  update data
lib.update = (dir, file, callBack)=>{
    // file open for writing
    fs.open(`${lib.basedir+dir}/${file}.json`, 'r+', (err1, fileDescriptor)=>{
        if (!err1 && fileDescriptor){
            // convert the data to string
            const stringData = JSON.stringify(data)

            // truncate thr file
            fs.ftruncate(fileDescriptor, (err2)=>{
                if(!err2){
                    // write to the file and close it
                    fs.writeFile(fileDescriptor,stringData, (err3)=>{
                        if(!err3){
                        // close the file
                        fs.close(fileDescriptor, (err4)=>{
                            if (!err4){
                                callBack(false)
                            }else{
                                callBack('Error closing file')
                            }
                        })
                    }else{
                        callBack('error waiting to file!!')
                    }

                    })
                }else{
                    callBack("Error truncating file!!")
                }
            })
        }else{
            console.log("Error updating. file may not exist")
        }
    })
}

// delete file
lib.delete = (dir, file, callBack)=>{
    //unlink file
    fs.unlink(`${lib.basedir+dir}/${file}.jason`, (err)=>{
        if(!err){
            callBack(false)
        }else{
            callBack("Error deleting file")
        }
    })
}


module.exports = lib