const os = require('os');
//info about current user
const user = os.userInfo();
//console.logI(user)
//method returns the system uptime in seconds 
const time = os.uptime();
//console.log(time);
const currentOS = {
    nam : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);