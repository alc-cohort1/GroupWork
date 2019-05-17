// streamas enable reading of data from a source and direct it to a source

var fs = require('fs');

var readStream = fs.createReadStream('file.txt')
readStream.setEncoding('utf8');
var data ='';

readStream.on('data',function(chunk){
console.log('------------------------------------------')
data += chunk;
    // console.log(chunk);

});

readStream.on('end',function(chunk) {
console.log(data);
console.log('--------------------------------------------END------------------------');
    
});