
/*---------------------------------------
 (1)  DEVELOPING A BASIC SERVER IN NODE JS 
--------------------------------------*/
var http = require('http'),
    host = '127.0.0.1',
    port = '9000';
    
    /*------------------------------------------------
    intsancieting server that accepets response and request
    
 ---------------------------------------------------------*/

var server = http.createServer(function(req,res){
   res.writeHead(200 ,{'text-content':'text/html'})
   res.end('<h1>Hello World</h1>')
}).listen(port,host,function(){
console.log('the server is running on http//:'+host+ ':'+port);

})


/*--------------------------------------------

(2)    writting a server that reads external file //// holds files in buffers

-------------------------------------*/

var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    host = '127.0.0.1',
    port ='9000';
    
var mimes=[{
    ".html": "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript",
    ".gif": "text/gif",
    ".jpg" : "image/jpeg",
    ".png"  : "image/png"
    

}]

var server =http.createServer(function(res,req){
// if the request url has (/) it should read ./idex.html or else read the given url
 
   var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);
   var contentType = mimes[path.extname(filepath)];
//    check if the file exists
fs.exists( filepath,function(file_exists){
   if(file_exists){
//    read and serve  
fs.readFile(filepath,function(error,content){
   if(error){
   res.writeHead(500);
   res.end();
   
   }else{
   res.writeHead(200,{'content-type':contentType});
   res.end(content ,'utf-8');
   
   }



})  
   }else{
   res.writeHeader(404);
   res.end('sorry we could not find the file u requested')
   }
})
}).listen(port,host,function(){
console.log('the server is running on http//'+ host + ':'+ port);
})


/*---------------------------------------------------------------------------

(3)   wriiting a more effient streamimg server that is supper fast to serve the website

-------------------------------------------------------------------------------*/


var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    host = '127.0.0.1',
    port = '9000';

var mimes = [{
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".gif": "text/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png"


}
]

var server = http.createServer(function (res, req) {
    // if the request url has (/) it should read ./idex.html or else read the given url

    var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);
    var contentType = mimes[path.extname(filepath)];
    //    check if the file exists
    fs.exists(filepath, function (file_exists) {
        if (file_exists) {
           res.writeHead(200,{'content-Type':contentType});
           var streamFile = fs.createReadStream(filepath).pipe(res);
           
           streamFile.on('error',function(){
           res.writeHead(500);
           res.end();
           
           })

        } else {
            res.writeHeader(404);
            res.end('sorry we could not find the file u requested')
        }
    })
}).listen(port, host, function () {
    console.log('the server is running on http//' + host + ':' + port);

})





/*=-------------------------------------------
unerstanding modules in node js

----------------------------------------------*/
module.export ={
addFn : function(a,b){
return a+b;

},
subtractFn : function (a,b) {
return a-b;
    
}
}



//  exporting then module in another page and using them 

var MathModule = require('  ./MathModule.js');


var addnumbers = MathModule.addFn(2,6);
console.log('adding two numbers :'+ addnumbers);


var subractingnumbers = MathModule.subtractFn(8,2);
console.log('subtrating two numbers :'+subractingnumbers);



// Node inbuilt Modules

http
fspath
Os
cluster

// all these come with the npm

npm init


// end of inbuilt modules in node






