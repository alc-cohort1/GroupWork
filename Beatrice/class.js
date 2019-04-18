//Create class Teacher and instatiate it with an object
var Teacher = new object ();
//Add properties 
Teacher.name = 'Susan';
Teacher.gender = 'Female';
Teacher.salary = '900,000';
Teacher.subject = 'English';
Teacher.school = 'British School of kampala';
Teacher.name = 'Bright';
Teacher.gender = 'Male';
Teacher.salary = '1,900,000';
Teacher.subject = 'Kiswahili';
Teacher.school = 'Kisu';
Teacher.name = 'Trevor';
Teacher.gender = 'Male';
Teacher.salary = '1,900,000';
Teacher.subject = 'Math';
Teacher.school = 'Kisu';

//Create methods with alert messages
Teacher.teacher_details = function(){
    alert(this.name + 'is a' + this.gender + 'teacher, teaching' + this.subject + 'at ' + this.school  );
};
Teacher.likes = function(){
    alert('My name is ' + this.name + 'and i love teaching' + this.subject);
};
Teacher.teaches = function(){
    alert('My name is ' + this.name +', ' + 'i teach at' + this.school);
};

//Create class Phone and instatiate it with an object
var Phone = new object ();
//Add properties 
Phone.name = 'iPhone X';
Phone.brand = 'Apple';
Phone.storage = '64GB';
Phone.name = 'Samsung Galaxy S9';
Phone.brand = 'Samsung';
Phone.storage = '64GB';
Phone.name = 'Sony Xperia 10 ';
Phone.brand = 'Sony';
Phone.storage = '64GB';

//Create methods with alert messages
Phone.myspecification = function(){
    alert('i want an' + this.name + 'with' + this.storage);
};
Phone.storage = function(){
    alert(this.name + 'has' + this.storage + 'storage');
};
Phone.like = function(){
    alert('i like' + this.name);
};

//Create class Animal and instatiate it with an object
var Animal = new object ();
//Add properties 
Animal.name = 'Blue whale';
Animal.type = 'mammal';
Animal.diet = 'Carnivore';
Animal.size = '82 to 105 feet';
Animal.habitat = 'oceans';
Animal.name = 'Horse';
Animal.type = 'mammal';
Animal.diet = 'Herbivore';
Animal.size = 'Height at the shoulders: 30 to 69 inches';
Animal.habitat = 'land';

//Create methods with alert messages
Animal.habitats = function(){
    alert('A' + this.name + 'lives' + this.habitat)
};
Animal.eat = function(){
    alert('A' + this.name + 'feeds on' + this.diet)
};
Animal.type = function(){
    alert('A' + this.name + 'lives' + this.type)
};

//Create class Doctor and instatiate it with an object
var Doctor = new object ();
//Add properties 
Doctor.name = 'Melanie';
Doctor.gender = 'Female';
Doctor.salary = '3,000,000';
Doctor.hospital = 'Mulago';
Doctor.name = 'Rosette';
Doctor.gender = 'Female';
Doctor.salary = '3,000,000';
Doctor.hospital = 'Mengo';
//Create methods with alert messages
Doctor.doctor_details = function(){
    alert(this.name + 'is a' + this.gender + 'doctor, working at ' + this.hospital);
};
Doctor.earning = function(){
    alert(this.name + 'earns' + this.salary);
}
Doctor.gender = function(){
    alert(this.name + 'is a' + this.gender);
}

//Create class lake and instatiate it with an object
var Lake = new object ();
//Add properties 
Lake.name = 'Bunyonyi';
Lake.location = 'south-western Uganda';
Lake.size = '7 kilometres';
Lake.name = 'Victoria';
Lake.location = 'central-southern Uganda';
Lake.size = '65,583 sq mi';

//Create methods with alert messages
Lake.details = function(){
    alert(this.name + 'is of size' + this.size  + 'located in' + this.location)
}
Lake.beauty = function(){
    alert(this.name + 'makes Uganda beautiful')
}
Lake.purpose = function(){
    alert(this.name + 'makes Uganda have favourable climate')
}