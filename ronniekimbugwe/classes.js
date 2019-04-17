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
  cat.description(); // function call
}
class Tiles {
  //class called Tiles
  tiles(name, make, location) {
    this.name = name;
    this.make = make;
    this.origin = location;
    //constructor with parameters name,make and location
  }

  description() {
    alert(
      this.name + "is of make " + this.make + "and is put " + this.location
    );
  }
}

let Cats = new Object();
{
  // new object or class Tiles called tile
  tile.name = "vinyl";
  tile["make"] = "granite";
  tile["origin"] = "floor";
  tile.description(); //function call
}
class Clans {
  //class called Tiles
  clans(name, totem, motto) {
    this.name = name;
    this.totem = totem;
    this.motto = motto;
    //constructor with parameters name,make and location
  }

  description() {
    alert(
      this.name + " totem is " + this.totem + "and the motto " + this.motto
    );
  }
}

let Clan = new Object();
{
  // new object or class Tiles called tile
  clan.name = "Balangira";
  clan["totem"] = "Engo";
  clan["motto"] = "Kiiso bwe kikulaba obulungi naawe okiraba.!";
  clan.description(); //function call
}
class Clouds {
  //class called Clouds
  clouds(name, isManMade) {
    this.name = name;
    this.isManMade = isManMade;

    //constructor with parameters name,isManMade
  }

  description() {
    alert(this.name + "is man made " + this.isManMade);
  }
}

let cloud = new Object();
{
  // new object or class Clouds called cloud
  cloud.name = " ‎Cumulusclouds";
  cloud[isManMade] = false;
  cloud.description(); //function call
}
