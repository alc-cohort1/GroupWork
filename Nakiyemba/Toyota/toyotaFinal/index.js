function validData() {
  // Variables for keeping the form true
  var customerId = document.getElementById("customerId");
  var name = document.getElementById("name");
  var town = document.getElementById ("town");
  var partNumber = document.getElementById ("partNumber");
  var describe = document.getElementById ("describe");
  var price = document.getElementById ("price")
  var quantity = document.getElementById ("quantity")
  var shipping = document.getElementById ("shipping")
  var oversize = document.getElementById ("oversize")


  //Assigning variables to patterns to be used for checking numbers and space in the input
  //Assigning variable cost and rounding off to 2 decimal places
  var spacePattern = /\s/;
  var numPattern = /[^0-9]/;
  var cost = (price * quantity).toFixed(2);

  //Function validate the various input fields
    if (customerId.value =="") {
      document.getElementById("customerId_error").innerHTML = "Missing field!";
      customerId.focus()
      return false;
    } 
     if(customerId.value.match(spacePattern)) {
      document.getElementById("customerId_error").innerHTML = "No spaces allowed!";
      customerId.focus()
      return false;
        }
    
    if (name.value =="") {
      document.getElementById("name_error").innerHTML = "Missing field!";
      name.focus()
      return false;
      }
    if (town.value=="" && town.value !=3 ) {
      document.getElementById("town_error").innerHTML = "Missing field!";
      town.focus()
      return false;
        }
      
    if (partNumber.value=="") {
      document.getElementById("partNumber_error").innerHTML = "Missing field!";
      partNumber.focus()
      return false;
        }

    if (describe.value=="") {
      document.getElementById("describe_error").innerHTML = "Missing field!";
      describe.focus()
      return false;
        }

    if (isNaN(price) || price <= 0) {
      document.getElementById("price_error").innerHTML = "Missing field!";
      price.focus()
      return false;  
        }

    if (numPattern.test(quantity) || quantity <= 0) {
      document.getElementById("quantity_error").innerHTML = "Missing field!";
      quantity.focus()
      return false;
      }
      

  // This is to calculate the sales tax
  function salesTax(amount) {
    document.getElementById("cost").innerHTML = `$ ${cost}`;
    this.cost = amount;

    // This calculates tax assigned to the various towns
    if (town.value === "KLA") {
      tax = this.cost * 0.1;
    } else if (town.value === "EBB" || town.value === "MBR") {
      tax = this.cost * 0.05;
    } else {
      tax = 0.0;
    }
    document.getElementById("salesTax").innerHTML = `$ ${tax.toFixed(2)}`;

    //Getting the amount of tax
    this.getTax = function() {
      return tax;
    };

    return shippingHandling();
  }

  // this function is to calculate shipping fee
  function shippingHandling() {
    if (shipping.value === "UPS") {
      shippingCost = 7.0;
    } else if (shipping.value === "Fed Ex Ground") {
      shippingCost = 8.5;
    } else if (shipping.value === "US Portal Air") {
      shippingCost = 9.25;
    } else {
      shippingCost = 12.0;
    }

    // This is to specially handle user with oversize container
    if (oversize.checked) {
      handlingCost = 5.0;
    } else {
      handlingCost = 0.0;
    }

    // This function calculates the shipping and handling total cost
    totalShippingCost = (quantity * (shippingCost + handlingCost)).toFixed(2);
    document.getElementById("handling").innerHTML = `$ ${totalShippingCost}`;

    //To calculate the total cost
    this.getShippingCost = function() {
      return totalShippingCost;
    };

    return totalCost();
  }

  //  // Function to calculate the total cost
  //  function totalCost() {
  //   var total = (parseFloat(cost) + parseFloat(window.totalShippingCost) + parseFloat(window.tax)).toFixed(2);
  //   document.getElementById("total").innerHTML = `$ ${total}`;
  // }
  
  // validData();
  // return false;
  // event.preventDefault();
}

validData();