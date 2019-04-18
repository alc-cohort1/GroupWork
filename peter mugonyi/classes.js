//class for country ||

var country = new Object();
country.name ="uganda";
country.city = "kampala";
country.population = "700000";
country.leader = "M7";
country.city = function(){
    return "The capital city of" + this.name + "is " + this.city ;
} 

//class for football club

var football_club = new Object();
football_team.name ="KCCA FC";
football_team.stadium ="logogo play ground";
football_team.manager ="ozzey";
football_team.boss ="KCCA";
football_team.homeground = function(){
    return "The home ground of" + this.name + "is " + this.stadium ;
}
//class for parliament

var parliament = new Object();
parliament.name="pariament of uganda";
parliament.speaker = "kadaga";
parliament.oppositionleader = "rony";
parliament.d_speaker ="olanya";
parliament.consists = function(){
    return "The " + this.name + "on top " + this.d_speaker + "and "  + this.oppositionleader; 
}


//class for a church


var church = new Object();
church.pastor ="kakande";
church.location = "kampala";
church.name = "kakandeminstries";
church.operation = function(){
    return  + this.name + "welcomes you  at there church in " + this.location + "and there pastor is " + this.pastor; 
}

//here is a class for television set
var television = new Object();
television.size = "24inc";
television.display = "LCD";
television.name = "LG";
television.modal = function(){
    return "This is a " + this.name + "television and the size is " + this.size + "and display "  + this.display; 

}