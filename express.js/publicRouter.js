const express = require('express')

const publicRouter = express.Router()
/*
const log = (req,res,next)=>{
    console.log("I am logging something!")
    next()
}    // log middleware

publicRouter.all('*', log)
*/
/*  // param:: method_1
publicRouter.param('user',(req, res, next, id)=>{
    req.user = (id === '1')? 'Admin': 'Anonymous'
    console.log("I am called once !")
    next()
})
*/
/*  // param:: method_2.  not get understood
publicRouter.param((param,option)=>(req, res, next, val)=>{
    if(val === option){
        req.user = 'Admin1'
        next()
    }else{
        req.user = 'Anonymous1'
        // res.sendStatus(403)
    }
})
publicRouter.param('user','12')
*/

publicRouter.get('/:user', (req, res, next)=>{
    console.log('This also matchs')
    next()
})

publicRouter.get('/:user',(req,res)=>{
    res.send(`This is home page.\nHellow ${req.user}`)
})

publicRouter.get('/service',(req,res)=>{
    res.send('This is home service')
})


module.exports = publicRouter