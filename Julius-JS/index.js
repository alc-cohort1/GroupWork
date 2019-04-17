var ministry = {
    name: 'Ministry of Education',
    minister: 'Ms Janet Museveni',
    numberOfDepartments: 8,
    budget: "9.2 billions",
    generateIncome: function(){
        console.log("Helllo, this is " + this.name + " we generate 10.7 billions");
    },
    collectTax: function(){
        console.log("We have collected 2.5 billions this month");
    }
};

var car = {
    model: 'BMW',
    color: 'Red',
    maxSpeed: '250 km/h',
    price: 'UGX 250 millions',
    hoot: function(){
        console.log('toooh tooooh');
    }
}

ministry.generateIncome();