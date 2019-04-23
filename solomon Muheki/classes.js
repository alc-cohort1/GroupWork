
//creating an object dog from dog class 
var dog= new object();

//class  dog properties
dog.name='viper';
dog.color='black';

dog.name='max';
dog.color='white';

dog.name='kapa';
dog.color='brown';

//class dog method
dog.barking= function(){
alert('hi I\'m'+this.name+'.'+this.color);
}

//creating  an object computers from computers class 
var computers= new object();

//class  computers properties
computers.name='LENONOVO';
computers.memory='4GB';

computers.name='DELL';
computers.memory='2GB';

computers.name='TOSHIBA';
computers.memory='2GB';

//class computers method
computers.processing_speed= function(){
alert('hi I\'m'+this.name+'.'+this.memory);
}


//creating  an object car from car class 
var car= new object();
//class  car properties
car.name='HARRIER';
car.manufacturer='TOYOTA';

car.name='VX';
car.manufacturer='TOYOTA';

car.name='FUSO';
car.manufacturer='TATA';

//class car method
car.speed= function(){
alert('hi I\'m'+this.name+'.'+this.manufacturer);
}



//creating an object horse from horse class  
var horse= new object();
//class  horse properties
horse.name='VIAN';
horse.age='black';

horse.name='CRUZ';
horse.age='WHITE';

horse.name='CAL';
horse.age='BROWN';

//class horse method
horse.drinks= function(){
alert('hi I\'m'+this.name+'.'+this.age);
}


//creating an object of pen from pen class
var pen= new object();

//class  pen properties
pen.name='bic';
pen.color='red';

pen.name='beifa';
pen.color='blue';

pen.name='nice';
pen.color='black';

//class pen method
pen.writes= function(){
alert('hi I\'m'+this.name+'.'+this.color);
}
