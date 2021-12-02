var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('speek',function(name){
    console.log(name ,'is Speeking');
})

eventEmitter.emit('speek','Ibrahim');