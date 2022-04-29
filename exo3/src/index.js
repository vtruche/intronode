const fs = require('fs');

let output = fs.readFileSync('src/log.txt', 'utf-8');
console.log(output);

