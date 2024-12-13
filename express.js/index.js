const express = require("express")
const multer = require('multer')
const path = require('path')
const app = express()

const UPLOADS_FOLDER = './uploads/'

// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, UPLOADS_FOLDER)
    },
    filename: (req, file, cb)=>{
        const fileExt = path.extname(file.originalname)
        const fileName = file.originalname
                                .replace(fileExt,"")
                                .toLowerCase()
                                .split(" ")
                                .join("-")+"-"+Date.now()
        cb(null, fileName+fileExt)
    }
})

// preapre the final multer upload option
var upload = multer({
    storage: storage,
    limits:{
        fileSize:1000000, // 1MB
    },
    fileFilter:(req, file, cb)=>{
        if(
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg"            
        ){
            cb(null, true)
        }else{
            cb(new Error("Only .jpg, .png, .jpeg format allowed!!"))
        }
    }
})

// a

// app route
app.post("/",upload.array( "avatar",3) ,(req, res)=>{
    console.log(req.files)
    res.send("Hellow world")    
})

app.listen(3000, ()=>{
    console.log("Server prot 3000")
})