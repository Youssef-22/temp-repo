const {createReadStream} = require('fs');
const stream = createReadStream('./contents/big.txt');
stream.on('data',(result) => {
    console.log(result);
})