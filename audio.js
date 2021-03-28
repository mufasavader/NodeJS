//serve mp3.js

const http=require ('http');
const fs = require('fs');
http.createServer((req,res)=>{
    console.log("Port Number : 3000");
//change MIME type to 'audio/mp3'
res.writeHead(200,{'Content-Type' : 'audio/mp3'});
fs.exists('audio.mp3', (exists)=>{
    if(exists){
        let rstream=fs.createStream('audio.mp3');
        rstream.pipe(res);
    }
    else{
        res.end('its a 404')
    }

});
}).listen(3000);
