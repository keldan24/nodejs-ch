const fs = require('fs');


fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and console.log the content of welcome.txt
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
