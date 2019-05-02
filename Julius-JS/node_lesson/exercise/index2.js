// // Using Symbol()
// const sym2 = Symbol("banana");
// const sym3 = Symbol("banana");
// console.log(sym2 === sym3);
// console.log(sym2);
// console.log(typeof sym2);

// Using callback function
var myCallback = function(data) {
  console.log("got data: " + data);
};

var usingItNow = function(callback) {
  callback("get it?");
};
usingItNow(myCallback);

var callback = function() {
  console.log("10 seconds later...");
};

setTimeout(callback, 10000);
