const fs = require('fs');
console.log('start');
fs.readFile('./contents/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    fs.readFile('./contents/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        fs.writeFile('./contents/result-async.txt',
        `here is the result ${first} , ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        }
        )
    })
})
console.log('starting the next task');