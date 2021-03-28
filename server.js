const http=require('http'); 


const host ='127.0.0.1';
const port=3000;


const server= http.createServer((request,response)=>{
response.writeHead(200, {"content-type" : "text/plain"});
response.write("Mathews Consistency pays");
console.log('server working');
response.end('Welcome Mathews');
});

server.listen(port,host, (error)=>{
    if(error){
        return console.log('Error occured :', error);

    }
    console.log('server is listening on ' + host + ':' + port);
});