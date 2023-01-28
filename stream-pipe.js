var http = require('http');
var fs = require('fs');
const server = http.createServer(function(req,res){
    const fileStream = fs.createReadStream('./contents/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})
server.listen(5000,()=>{
    console.log('server listening on port 5000..');
})