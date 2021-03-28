//serve-html.js

const http = require('http');
const fs=require('fs');

http.createServer(function(req,res){
    console.log('Port Number: 3000');
    //change the MIME type from 'text/plain' to 'text/html'
    res.writeHead(200,{'Content-Type':'text/html'});
    //reading the content file
    fs.readFile('index.html',(err,data)=>{
        //checking for errors
        if(err)
        throw err;
        console.log('operation success ');
        //sending the response
        res.end(data);
    });
}).listen(3000);
