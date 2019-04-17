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
};

var computer = {
    model: 'MacBook Pro',
    ramSize: '16GB',
    hardDriveCapacity: '1TB',
    expiryDate: '16/Feb/2025',
    process: function(){
        console.log('I am processing data into information');
    }
};

var employee = {
    id: '144/em/279',
    name: 'Tom',
    salary: 'UGX 4,500,000',
    clean: function(){
        console.log('I am ' + this.name + 'I am a cleaner');
    }
};

var tvChannel = {
    name: 'Disney',
    numberOfShows: '45',
    paid: true,
    location: 'US',
    shout: function(){
        console.log('Woooh waaaaah');
    }
}

tvChannel.shout();