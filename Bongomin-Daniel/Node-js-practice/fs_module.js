var fs = require('fs');

// reading from a file async
var file = fs.readFileSync('test.txt','utf8')
console.log(file);


// writing to the file
// this will create a nother file called test2 with same content of Test.txt
fs.writeFileSync('test2.txt',file);


// reading with querying errors in good manner

var file = fs.readFileSync('test.txt',function(err,data) {

if(err){
console.error(err);
console.log(data)
}
});
console.log('the file is read')


// writting to file sync in right manner
fs.writeFileSync('test.txt',file,function(err,data){
if(err){
console.error(err);
console.log(data)
}
})




// deleting and removing directories in node js using fs module


// removing file
var fs = require('fs');
fs.unlink('test.txt');



// creating a directory sync
fs.mkdirSync('node')

// another way
fs.mkdirSync('node',function(){
fs.writeFileSync('./node/mynode.txt','welcome to this new file which is created')

})


// removing directory
fs.rmdir('node');


// another way deteting a ffolder with files
fs.unlink('./node/mynode.txt',function(){

fs.rmdir('mynode.txt');

});



