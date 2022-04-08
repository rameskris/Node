const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome home")
    }
    if(req.url==='/about'){
        res.end("welcome about")
    }
    
    res.end(`<h1>Oops!</h1>`)
})

server.listen(8000)