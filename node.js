var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('package.json',(err,data)=>{
        res.write(data);
        res.end();
        console.log('Succesfull Running')
    })
}
).listen(8080)