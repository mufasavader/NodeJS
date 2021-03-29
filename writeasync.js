//writing a file asynchronously
const fs =require('fs');
const content="This is the new content";
fs.writeFile('message.txt',content,(err)=>{
    if(err)
        throw err;
        console.log('It\'s saved');
    
});