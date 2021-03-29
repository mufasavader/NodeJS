// Reading file synchronously
 const fs = require('fs');
 const filename = 'content.txt';//Name of the file to be read
 const content = fs.readFileSync(filename);
 console.log('Content : ' + content);