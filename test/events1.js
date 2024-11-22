const EventEmitter = require('events')

class Event1 extends EventEmitter{
    greetTask(){
        console.log("This is from event1 class")

        this.emit('greeting',{
            greet: 'Good morning',
            task: 'take'
        })
    }
}

module.exports = Event1