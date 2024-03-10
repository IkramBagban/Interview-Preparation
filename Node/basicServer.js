const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case '/':
            res.end('Home page')
            break;
        case '/about':
            res.end('about page');
            break;
        case '/favicon.ico':
            res.end('/favicon.ico');
            break;
        default :
            res.end('404 page')
    }
})


server.listen(1020)