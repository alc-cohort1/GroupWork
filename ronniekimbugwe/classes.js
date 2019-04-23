class Cats {
  cats(name, breed, origin) {
    this.name = name;
    this.breed = breed;
    this.origin = origin;
    //attributes name,breed and origin
  }

  PlaceOforigin() {
    alert(this.name + "of  " + this.breed + "is from " + this.origin);
  }
  sound() {
    alert(this.name + "meows and its from  " + this.origin);
  }
  size() {
    alert(this.name + "bigger than other cats of  breed " + this.breed);
  }
}

let cat = new Object();
{
  // new object of class Cats called cat
  cat.name = "Mycat";
  cat["breed"] = "purina";
  cat["origin"] = "russia";
  cat.PlaceOforigin(); // function call
}
let cat1 = new Object();
{
  // new object of class Cats called cat
  cat1.name = "Mycat1";
  cat1["breed"] = "Russian Blue";
  cat1["origin"] = "Russia";
  cat1.sound(); // function call
}
let cat2 = new Object();
{
  // new object of class Cats called cat
  cat2.name = "Mycat2";
  cat2["breed"] = "ragdoll";
  cat2["origin"] = "america";
  cat2.size(); // function call
}
class Tiles {
  //class called Tiles
  tiles(name, make, location) {
    this.name = name;
    this.make = make;
    this.origin = location;
    //constructor with attributes name,make and location
  }

  description() {
    alert(
      this.name + "is of make " + this.make + "and is put " + this.location
    );
  }
  placement() {
    alert(
      this.name +
        "tiles and other " +
        this.make +
        "are placed in " +
        this.location
    );
  }
  price() {
    alert(this.name + "tiles are  the most expensive tiles ");
    // + this.make + "are placed in " + this.location);
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
let tile1 = new Object();
{
  // new object or class Tiles called tile
  tile.name = "terrazo";
  tile["make"] = "granite";
  tile["origin"] = "floor";
  tile.price(); //function call
}
let tile2 = new Object();
{
  // new object or class Tiles called tile
  tile.name = "marble";
  tile["make"] = "granite";
  tile["origin"] = "floor";
  tile.placement(); //function call
}
class Clans {
  //class called Clans
  clans(name, totem, motto) {
    this.name = name;
    this.totem = totem;
    this.motto = motto;
    //constructor with attributes name totem motto
  }

  description() {
    alert(
      this.name + " totem is " + this.totem + "and the motto is" + this.motto
    );
  }
  size() {
    alert(this.name + " is the biggest clan");
  }
  Mydescription() {
    alert(
      this.name + " my clan i dont eat or associate myself with" + this.totem
    );
  }
}

let clan = new Object();
{
  // new object of class Clans called clan
  clan.name = "Akasimba";
  clan["totem"] = "Engo";
  clan["motto"] = "Kiiso bwe kikulaba obulungi naawe okiraba.!"; //
  clan.description(); //function call
}
let clan1 = new Object();
{
  // new object of class Clans called clan
  clan1.name = "Ngabbi";
  clan1["totem"] = "jjerengesa";
  clan1["motto"] = "Kalikutanda ne kakutwala mu Bengabi Abasambaganyi!";
  clan1.size(); //function call
}
let clan2 = new Object();
{
  // new object of class Clans called clan
  clan2.name = "Mutima";
  clan2["totem"] = "Mawuggwe (Lungs)";
  clan2["motto"] = "Kifa ennyanja, omuvubi y'abika."; //
  clan2.description(); //function call
}
class Clouds {
  //class called Clouds
  clouds(name, isManMade, isRare) {
    this.name = name;
    this.isManMade = isManMade;
    this.isRare = isRare;

    //constructor with attributes name,isManMade
  }

  description() {
    alert(this.name + "is man made :" + this.isManMade);
  }
  created() {
    alert(this.name + "is man made ");
  }
  seen() {
    alert("is " + this.name + "rare?:" + this.isRare);
  }
}

let cloud = new Object();
{
  // new object of class Clouds called cloud
  cloud.name = " ‎Cumulusclouds";
  cloud["isManMade"] = false;
  cloud.description(); //function call
}
let cloud1 = new Object();
{
  // new object of class Clouds called cloud
  cloud1.name = " ‎Cumulusclouds";
  cloud1["isManMade"] = false;
  cloud1.description(); //function call
}
let cloud2 = new Object();
{
  // new object of class Clouds called cloud
  cloud2.name = " ‎Cumulusclouds";
  cloud2["isManMade"] = false;
  cloud2.description(); //function call
}

class Shoes {
  //class called shoes
  shoes(name, isUnisex, isAllsizes) {
    this.name = name;
    this.isAllsizes = isAllsizes;
    this.isUnisex = isUnisex;

    //constructor function with attributes name,isUnisex and isAllsizes
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
  sales() {
    alert(this.name + "have high sales");
  }
  comparision() {
    alert(this.name + "are of all sizes: " + this.isAllsizes);
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
let shoe1 = new Object();
{
  // new object of class Shoes called shoe
  shoe.name = " ‎jungleboots";
  shoe["isAllsizes"] = true;
  shoe["isUnisex"] = true;

  shoe.description(); //function call
}
let shoe2 = new Object();
{
  // new object of class Shoes called shoe
  shoe.name = "stillettos";
  shoe["isAllsizes"] = true;
  shoe["isUnisex"] = false;

  shoe.description(); //function call
}
