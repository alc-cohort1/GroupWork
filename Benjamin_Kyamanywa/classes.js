// Different class categories

// Below is a class for motorbike
var motorbike = new object ();
motorbike.brand = "Harley Davidson Street 750";
motorbike.type = "cruiser";
motorbike.engineType = "Liquid Cooled";
motorbike.engineRoar = function () {
    alert("!!!!Vrooooommmm!!!");
}
motorbike.engineStart = function () {
    alert("!!!Kekekeee!!!");
}
motorbike.engineStop = function () {
    alert("!!!Kekekeeessshhhh!!!");
}

// Below is a class for footballTeam
var footballTeam = new object ();
footballTeam.club = "Leicester City F.C";
footballTeam.league = "Premier League";
footballTeam.players = ["Kasper Schmeichel", "Danny Simpson", "Ben Chilwell", "Caglar Soyuncu", "Wes Morgan", "Jonny Evans", "Ricardo Pereira", "James Maddison", "Damarai Gray", "Jamy Vardy", "Shinji Okazaki", ];
footballTeam.celebration = function () {
    alert("!!!Goooooaaaalll!!!");
}
footballTeam.introduction = function () {
    alert('The' + 'line up is' + this.players + '.'  );
}
footballTeam.loss = function () {
    alert("!!!Aaaaaaaawwwwwwwwwww!!!");
}

// Below is a class for child
var child = new object ();
child.name = "Daenerys Targaryen";
child.gender = "Female";
child.interests = ["Singing", "Swimming", "Travelling", "Gamming", "Dancing", "Reading",];
child.greeting = function () {
    alert('Hi! I\'m' + this.name + '.');
}
child.scream = function () {
    alert("!!!Aaaaaaaaahhhhhhhh!!!!");
}
child.cry = function () {
    alert("!!!Myyyyyaaaaahhhhh!!!")
}

// Below is a class for novel
var novel = new object ();
novel.author = "Nicholas Sparks";
novel.series = "The Notebook and The Wedding";
novel.genre = "	Romance";
novel.introduction = function () {
    alert("After thirty years of marriage, Wilson Lewis, son-in-law of Allie and Noah Calhoun (of The Notebook), is forced to admit that the romance has gone out of his marriage and he is desperate to win his wife back.");
}



// Below is a class for laptop
var laptop = new object ();
laptop.brand = "Macbook Pro";
laptop.processor = "2.6GHz 6-core Intel Core i7";
laptop.operatingSystem = "macOS";
laptop.name = function () {
    alert('This is a ' + this.brand + '.');
}
laptop.system = function () {
    alert('It has' + this.operatingSystem + '.' );
}
laptop.introduction = function () {
    alert('We bring you the' + this.brand + 'having' + this.operatingSystem + 'using a' + this.processor + 
    '.' );
}



