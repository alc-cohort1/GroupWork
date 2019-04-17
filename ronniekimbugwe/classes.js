class Cats {
  cats(name, breed, origin) {
    this.name = name;
    this.breed = breed;
    this.origin = origin;
    //constructor with parameters name,breed and origin
  }

  description() {
    alert(this.name + "of  " + this.breed + "is from " + this.origin);
  }
}

let Cats = new Object();
{
  // new object or class Cats called cat
  cat.name = "cat";
  cat["breed"] = "purina";
  cat["origin"] = "russia";
  cat.description();
}
