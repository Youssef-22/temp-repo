const fs = require('fs');
console.log('start');
const first = fs.readFileSync('./contents/first.txt','utf8')
const second = fs.readFileSync('./contents/second.txt','utf8')

fs.writeFileSync(
    './contents/result-sync.txt',
    `here is the result ${first} , ${second}`,
    {flag : 'a'}
    )
    //to appent this new file and not erase the old text 
    //simply add the argument ,{flag : 'a'}
console.log('done with this task');
console.log('starting the next one');