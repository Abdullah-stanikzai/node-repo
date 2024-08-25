const path = require('path')

console.log(path.sep)

const filepath = path.join('/content','subfodler', 'test.txt')
console.log(filepath);


const absolute = path.resolve(__dirname,'content','subfodler', 'test.txt' )
console.log(absolute);
