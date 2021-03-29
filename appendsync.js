//appending synchronously
const fs=require('fs');
new_data="This data appended async";
fs.appendFileSync('input.txt',new_data);
console.log('Appended Successfully in sync');