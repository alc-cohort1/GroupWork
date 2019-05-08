// using events

var events = require('events');

//  creating an instance of emitter  // using event emmiter
var eventEmitter  = new events.EventEmitter();

eventEmitter.on('clicked',function(button){
  console.log(button +'somithing is clicked')

})
eventEmitter.emit('clicked','buton 1');


// an advanced example of listensrs in emiiters

var events = require('events');
var util = require('util');

var eventEmitter = new events.EventEmitter();
 var Students = function(name) {
 this.name = name;
     
 }
 util.inherits(Students,events.EventEmitter);
  var max = new Students('max');
   max.on('scored', function(max) {
   console.log(max.name+ 'scores'+marks+ 'marks');
       
   })
   
   max.emit('scored',95)