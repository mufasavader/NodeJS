//writimg files synchronously
const fs =require('fs');
const content="This is the contnent in the file";
fs.writeFileSync('content.txt',content);
console.log('file Written successfully');