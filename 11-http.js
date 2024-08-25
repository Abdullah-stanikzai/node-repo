const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end('welcome to our home page');
        return;
    }
    if (req.url ==='/about'){
        res.end("Heres is our short history");
        return;
    }
    res.end(`
    <h1>Oops!</h1>`);
})


server.listen(5001);