function vehicle (make, spead, color) {
    this.make = make;
    this.spead = spead;
    this.color = color;
    this.getName = function(){
        return this.make + "" + this.model;
    }
}

