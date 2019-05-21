function sales() {
  // Variables for keeping the form values
  var customerId = document.toyotaForm.customerId.value;
  var name = document.toyotaForm.name.value;
  var town = document.toyotaForm.town.value;
  var partNumber = document.toyotaForm.partNumber.value;
  var description = document.toyotaForm.description.value;
  var pricePerPart = document.toyotaForm.pricePerPart.value;
  var quantity = document.toyotaForm.quantity.value;
  var shipping = document.toyotaForm.shipping.value;
  var oversize = document.toyotaForm.oversize;

  //Assigning variables to patterns to be used for checking numbers and space in the input
  //Assigning variable cost and rounding off to 2 decimal places
  var spacePattern = /\s/;
  var numPattern = /[^0-9]/;
  var cost = (pricePerPart * quantity).toFixed(2);

  //Function validate the various input fields
  function validData() {

    if (customerId =="") {
      document.getElementById("customerId").innerHTML = "Customer ID is missing*";
        }else if(customerId.match(spacePattern)) {
      document.getElementById("customerId").innerHTML = "Customer ID must not contain blank spaces*";
        }else{
      document.getElementById("customerId").innerHTML = "";
    }
    
    if (name =="") {
      document.getElementById("name").innerHTML = "Customer Name is missing*";
      }else{
        document.getElementById("name").innerHTML = "";
    }
  
    if (town=="") {
      document.getElementById("town").innerHTML = "Town Code is missing*";
        }else if (town.length != 3) {
      document.getElementById("town").innerHTML = "Town code must be 3 characters*";
        }else{
      document.getElementById("town").innerHTML = "";
    }
      
    if (partNumber=="") {
      document.getElementById("partNumber").innerHTML = "Part Number is missing*";
        }else{
      document.getElementById("partNumber").innerHTML = "";
    }

    if (description=="") {
      document.getElementById("description").innerHTML = " Description is missing*";
        }else{
      document.getElementById("description").innerHTML = "";
    }

    if (isNaN(pricePerPart) || pricePerPart <= 0) {
      document.getElementById("pricePerPart").innerHTML = "Price is missing*";  
        }else{
      document.getElementById("pricePerPart").innerHTML = "";
    }

    if (numPattern.test(quantity) || quantity <= 0) {
      document.getElementById("quantity").innerHTML = "Quantity is missing*";
      }else{
        document.getElementById("quantity").innerHTML = "";
    } 
      return salesTax(cost);
  }

  // Function to calculate the amount of the sales tax
  function salesTax(amount) {
    document.getElementById("cost").innerHTML = `$ ${cost}`;
    this.cost = amount;

    // This alculates the sales tax for Kampala, Mbarara, Entebbe and other towns
    if (town === "KLA") {
      tax = this.cost * 0.1;
    } else if (town === "EBB" || town === "MBR") {
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

  // Function to calculate cost of shipping for UPS, Fed Ex Ground, Fed Ex Air and US Portal Air
  function shippingHandling() {
    if (shipping === "UPS") {
      shippingCost = 7.0;
    } else if (shipping === "Fed Ex Ground") {
      shippingCost = 8.5;
    } else if (shipping === "US Portal Air") {
      shippingCost = 9.25;
    } else {
      shippingCost = 12.0;
    }

    // This calculates extra handling cost for oversize container
    if (oversize.checked) {
      handlingCost = 5.0;
    } else {
      handlingCost = 0.0;
    }

    // This calculates the total shipping and handling cost
    totalShippingCost = (quantity * (shippingCost + handlingCost)).toFixed(2);
    document.getElementById("handling").innerHTML = `$ ${totalShippingCost}`;

    //Getting the total shipping cost
    this.getShippingCost = function() {
      return totalShippingCost;
    };

    return totalCost();
  }

  // Function to calculate the total cost
  function totalCost() {
    var total =
      parseFloat(cost) +
      parseFloat(window.tax + parseFloat(window.totalShippingCost)).toFixed(2);
    document.getElementById("total").innerHTML = `$ ${total}`;
  }
  
  validData();
  return false;
}
