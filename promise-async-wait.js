const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//                 resolve(data);
//         })
//     })
// }





// getText('./contents/first.txt')
// .then(result =>console.log(result))
// .catch(err => console.log(err))

const start = async()=>{
try {
    const first = await readFilePromise('./contents/first.txt','utf8');
    const second = await readFilePromise('./contents/second.txt','utf8');
    await writeFilePromise('./contents/result-sync.text','THIS SHIT IS BOUT TO GO DOWN',{flag : 'a'}) 
    console.log(first);
    console.log(second);
} catch (error) {
        console.log(error);
    }
}
start();
// const http = require('http'); 
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('home page');
//     }
//     else if(req.url === '/about'){
        
//         res.end('About page');
//     }else{
//     res.end('Error page');
//     }
// })
// server.listen(5000,()=>{
//     console.log('Server listening on port : 5000...');
// })