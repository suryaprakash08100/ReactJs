var http=require('http');
http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
    console.log("Server is Running")
}).listen(8080)