
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

