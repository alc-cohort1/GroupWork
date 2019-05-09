
"strict";
/* this is a class using the constractor method*/
function vehicle (make, spead, color) {
    this.make = make;
    this.spead = spead;
    this.color = color;

    this.getName = function(){
        //code that is executed when the class is called
        return this.make + "" + this.model;
    }
}
// this class is called when this.getInfo points to the fuction
function Apple (type, weight) {
    this.type = type;
    this.weight = weight;
    
    this.getInfo = function() {
        return this.color + ' ' + this.type;
    };
}

//the code below is a besic way to diclare an object 
var student = {firstName:"Johnson", lastName:"katungye", age:28, course:"software development"};
 console.log(student);


 // object oriented javascript

 // creating the obect myself
 var car = {name:"benz", color: "blue", modal:"250class"};

 //creating the object using the factory with manufacture and return

 function car(name){
    return {name:benz};
 }
 var benz = car("benz");


 // using the constractor to make objectPosition: 

     function car(name){
        this.name = benz;
    }
 var benz =[] new car("benz");

 //using a class for es6

 class car{
     this.name = "benz";
 }


 //dot Notation .
 var carName = car.name;

// [] Notation
var carName = ["name"];

var car = {
    name:"car",
    speed: 180
};


//JSOLN


var johnson = {
    age:20,
    name:"johnson",
    ugandan: true,
    height: null,
    dateOfDeath: undefined,
    hobies:["swimminng","movies"],
    sddress:{
     town: "kampla",
     parish: "katwe",
     district: "mukono"   
    },
    speak: function () {
        console.log("my name "+this.name);
    }
};
console.log(johnson)

//Factory function 

function person(){
  
    return
    function person(){
  
        return
        {
            age:20,
            name:"johnson",
            ugandan: true,
            height: null,
            dateOfDeath: undefined,
            hobies:["swimminng","movies"],
            sddress:{
             town: "kampla",
             parish: "katwe",
             district: "mukono"   
            },
            speak: function () {
                console.log("my name "+this.name);
            }
        };
    }
}

var johnson = person("johnson")