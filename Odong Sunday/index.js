

// Adding javascript objects


const computer = new object();
computer.Color = "black";
computer.size = "21 inches";
computer['weight'] = "15 kg";
computer.typeOf = function(){
    alert('this is a brand new laptop computer');
    return "if the size is less than " + this.size + "then its a laptop"
};

computer.portability = function(){
        alert("this is a dekstop")
    return this.size + this.weight;
};
computer.operation = function(){
    return "A laptop can work without constantly connecting it to a power source"
}




const medicalExpert = new object();
medicalExpert.age = 25;
medicalExpert.name ="Sunday";
medicalExpert.yearOfExperience = "below 5 years"
medicalExpert.doctor = function(){
   return "My name is " +  this.name + "and i am" + this.age;
}
medicalExpert.nurse = function(){
   return "Any person below " + this.age + "is considered an experienced nurse"
}
medicalExpert.medicalTrainee = function(){
   return "Everyone having" + this.yearOfExperience + " in medical field is a trainee"
} 



const sportsPerson = new object();
sportsman['age'] = 25;
sportsman.gender = "male";
sportsman.numberOfGames = "3";
sportsman.footWare = "boots";
sportsman.jersey = "addidas"
sportsman.levelofExperience = function(){
   return "All " + this.gender + "footballers claim to be below " + this.age + "years old";
}
sportsman.typeOfSport = function(){
   return "he plays more than" + this.numberOfGames + "games";
}
sportsman.dressCode = function(){
   return "he wares" + this.footWare + "and" + this.jersey;
}



const television = new object();
television.color = "green";
television.screenSize = "13 inches";
television.price = (200,000 + " shillings");
television.screenDimensionDisplay = "2D";
television.screenColorDisplay = "Black and white";
televisio.origin = "China";
television.typeOfTelevision = function(){
   return "if it a " + this.color + "television and the size is " + this.screenSize + "then it must cost " 
   + this.price; 
}
television.operation = function(){
   return "if it is a " + this.screenDimensionDisplay + "TV and the display color is " + this.screenColorDisplay  + " then it must cost less than " + this.price;
}
televison.make = function(){
    return "if its display is " + this.screenColorDisplay + " then its from " + this.origin;
}
