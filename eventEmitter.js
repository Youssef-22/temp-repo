const EventEmitter = require('events');
const customEmittr = new EventEmitter();

customEmittr.on('response',(name,id)=>{
    console.log(`data recieved from ${name} id is ${id}`);
})
customEmittr.on('response',()=>{
    console.log('other logic here');
})
customEmittr.emit('response','youssef',20)