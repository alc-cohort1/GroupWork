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