var jackets = new Object();
jackets.name = "louisViutone";
jackets.price = $2000;
jackets.material = "leather";
jackets.weight = "light";
jackets.colors = "diverse";
jackets.seasons = function(){
    alert("Hello there, welcome to the world of"
     + this.name + "," + "We\'re the world\'s coolest jacket line and we range from"
     + this.price + "grab yourself a" + this.name + "today" 
     + "." + "One of our top brands are"
      + this.leather + "and are" + this.weight + "on the body" + this.colors + "." + "Look different in our various" + this.colors + "." ) 
}


var food = new Object();
food.name = 'Otigo';
food.type = 'Greens';
food.source= 'Jungle';
food.taste = 'Sour';
food.health = function(){
    alert('Ever know there\,s such a healthy delicasy called' + this.name 
    + "?" + this.type + "are healthy and can be found in any" + this.source + "." + 
    "Its kind of" + this.taste + "but at the end of the day healthy, so treat your health")
}


var arsenal = new object();
arsenal.city = 'unknown';
arsenal.manager = 'not sure';
arsenal.former = 'HENRY THIERY';
arsenal.team = function(){
    alert('Home bases of most arsenal players is')
}
