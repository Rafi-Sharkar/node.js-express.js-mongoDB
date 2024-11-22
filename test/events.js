// describtion::    first we have to write the event listener then event raise. we must maintain the order   

//step_1: require the events class
const EventEmitter = require('events')      // events return class
const { emit } = require('process')

//step_2: make an object of EventEmitter class
const emitter = new EventEmitter()

//  require the events1 class 
const Events1 = require('./events1')

//step_3: register a listener for bellRing event
emitter.on('bellRing', ()=>{
    console.log("hi, Rafi Sharkar")
})

//step_4: raise an event
emitter.emit('bellRing')

// example 2 with one parameter
emitter.on('bellRing1',(greet)=>{
    console.log(`hi, Rafi Sharkar.\n${greet}`)
})

emitter.emit("bellRing1", 'Good evening')

// make a object of events1 class
const events1 = new Events1()

// example 2 with two parameter
events1.on('greeting',({greet, task})=>{
    console.log(`hi, Rafi Sharkar.\n${greet} \n${task} the report.`)
})

// call for raise event
events1.greetTask()


