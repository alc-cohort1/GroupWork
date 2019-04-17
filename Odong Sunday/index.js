// Adding javascript objects


 const computer = new object();
 computer.Color = "black";
 computer.size = "21 inches";
 computer['weight'] = "15 kg";
 computer.laptop = function(){
     alert('this is a brand new laptop computer')
 };

 computer.Desktop = function(){
         alert("this is a dekstop");
         this.size;
         this.weight;
 }

const medicalExpert = new object();
medicalExpert.age = 25;
medicalExpert.name ="Sunday";
medicalExpert.doctor = function(){
    return "My name is " +  this.name + "and i am" + this.age;
}


const sportsman = new object();
sportsman['age'] = 25;
sportsman.gender = "male";
sportsman.typeOfSport = "Football"
sportsman.levelofExperience = function(){
    return "All " + this.gender + "footballers claim to be below " + this.age + "years old";
}
sportsman.typeOfSport = function(){
    return "he plays" + this.typeOfSport;
}

const television = new object();
television.color = "green";
television.screenSize = "13 inches";
television.price = (200,000 + " shillings")
television.operation = function(){
    return "if it a " + this.color + "television and the size is " + this.screenSize + "then it must cost " 
    + this.price; 
}
