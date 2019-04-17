/* Creating objects instantly */

var Artist1= new Object();
Artist1.type = poet;
Artist1.name = GeorgeThePoet;
Artist1.gender = Male;
Artist1.nationality = Ugandan;
Artist1.website = www.wonderfulpoet.com;
Artist1.greeting = function (){
    alert ("Hi I\'m + this.name + a poet based in Jinja.");
};

var Artist2= new Object();
Artist2.name = Zamzam;
Artist2.type = dancer;
Artist2.gender = female;
Artist2.nationality = Rwandan;
Artist2.website = www.zammiethedancer.com;
Artist2.greeting = function (){
    alert ("Hi I\'m + this.name + a dancer based in Kigali, looking forward to connecting with you.");
};

var Artist3= new Object();
Artist3.name = JB;
Artist3.type = Actor;
Artist3.gender = Male;
Artist3.nationality = Kenyan;
Artist3.website = www.awesomeactorjb.com;
Artist3.greeting = function (){
    alert ("Hi I\'m + this.name + I hope to wow you with my acting.");
};

var Artist4= new Object();
Artist4.name = Olee;
Artist4.type = writer;
Artist4.gender = female;
Artist4.nationality = Ugandan;
Artist4.website = www.oleebranch.com;
Artist4.greeting = function (){
    alert ("Hi I\'m + this.name + a travel writer hoping to take you places through my writing.");
};

var Artist5= new Object();
Artist5.name = Tendo;
Artist5.type = Photographer;
Artist5.gender = Male;
Artist5.nationality = Ugandan;
Artist5.website = www.tendoslense.com;
Artist5.greeting = function (){
    alert ("Hi I\'m + this.name + see the world through my lense.");
};
