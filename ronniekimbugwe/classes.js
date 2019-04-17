class Cats {
  cats(name, breed, origin) {
    this.name = name;
    this.breed = breed;
    this.origin = origin;
    //parameters name,breed and origin
  }

  description() {
    alert(this.name + "of  " + this.breed + "is from " + this.origin);
  }
}

let cat = new Object();
{
  // new object of class Cats called cat
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

let tile = new Object();
{
  // new object or class Tiles called tile
  tile.name = "vinyl";
  tile["make"] = "granite";
  tile["origin"] = "floor";
  tile.description(); //function call
}
class Clans {
  //class called Clans
  clans(name, totem, motto) {
    this.name = name;
    this.totem = totem;
    this.motto = motto;
    //constructor with parameters name,make and location
  }

  description() {
    alert(
      this.name + " totem is " + this.totem + "and the motto is" + this.motto
    );
  }
}

let clan = new Object();
{
  // new object of class Clans called clan
  clan.name = "Akasimba";
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
  // new object of class Clouds called cloud
  cloud.name = " ‎Cumulusclouds";
  cloud["isManMade"] = false;
  cloud.description(); //function call
}

class Shoes {
  //class called shoes
  shoes(name, isUnisex, isAllsizes) {
    this.name = name;
    this.isAllsizes = isAllsizes;
    this.isUnisex = isUnisex;

    //constructor function with parameters name,isUnisex and isAllsizes
  }

  description() {
    alert(
      this.name +
        "is unisex" +
        this.isUnisex +
        " and is allsized" +
        this.isAllsizes
    );
  }
}

let shoe = new Object();
{
  // new object of class Shoes called shoe
  shoe.name = " ‎plimsoms";
  shoe["isAllsizes"] = true;
  shoe["isUnisex"] = true;

  shoe.description(); //function call
}
class Belts {
  //class called Belts
  belts(name, isUnisex, color) {
    this.name = name;
    this.color = color;
    this.isUnisex = isUnisex;

    //constructor function with parameters name,isUnisex and color
  }

  description() {
    alert(
      this.name + "is unisex" + this.isUnisex + " of color" + this.isAllsizes
    );
  }
}

let belt = new Object();
{
  // new object of class Belt called belt
  belt.name = " ‎zara";
  belt["color"] = "black";
  belt["isUnisex"] = true;

  belt.description(); //function call by object belt
}
