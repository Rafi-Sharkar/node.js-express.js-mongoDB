const express = require('express')
const todoSchema = require('../schemas/todoSchema')
const { default: mongoose } = require('mongoose')
const router = express.Router()

const Todo = new mongoose.model('Todo', todoSchema)

// get all the todos
router.get('/', async(req, res)=>{

})

// get a todo by id
router.get('/:id', async(req, res)=>{

})

// post todo
router.post('/', async(req, res)=>{
    const newTodo = new Todo(req.body)
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                error: "There was server side error!"
            })
        }else{
            res.status(200).json({
                message: "Todo was insrteed successfully"
            })
        }

    })
})

//post multiple todo
router.post('/all', async(req, res)=>{

})

// put todo by id
router.put('/:id', async(req, res)=>{

})

// delete todo
router.delete('/:id', async(req, res)=>{

})

module.exports = router