const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome assholes ')
    }if(req.url === '/about'){
        res.end('this is our history')
    }
    res.end(`
    <h1>Ooops!!!!</h1>
    <p>we can't seem to find the page you're looking fore</p>
    <a href="/">back home <a>
    `)
})
server.listen(5000)