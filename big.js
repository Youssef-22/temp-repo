const fs = require('fs');
for(let i=0;i<100;i++){
    fs.writeFileSync('./contents/big.txt',`hello there num ${i}\n`,{flag : 'a'})
}