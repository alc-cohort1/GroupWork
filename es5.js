//ECMA --es5


// Change a property





Object.defineProperty(
	person, "language", {value : "NO"},
	

	);















var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};


//Listing Enumerable Properties


var person = {
  firstName: "John",
  lastName : "Doe"
  language : "EN"
};

Object.defineProperty(person, "language", {enumerable:false});
Object.keys(person);  // Returns an array of enumerable properties
 







//Listing All Properties


var person = {
  firstName: "John",
  lastName : "Doe"
  language : "EN"
};

Object.defineProperty(person, "language", {enumerable:false});
Object.getOwnPropertyNames(person);  // Returns an array of properties




