function sales() {
  // Variables for keeping the form values
  var record = document.salesForm;
  var customerId = record.customerId.value;
  var name = record.name.value;
  var town = record.town.value;
  var partNumber = record.partNumber.value;
  var description = record.description.value;
  var pricePerPart = record.pricePerPart.value;
  var quantity = record.quantity.value;
  var shipping = document.salesForm.shipping.value;
  var oversize = document.salesForm.oversize;
  var cost = (pricePerPart * quantity).toFixed(2);

  // This function validate the input fields
  function validData() {
    var pattern1 = /\s/;
    var pattern2 = /[^0-9]/;

    if (!customerId || customerId.match(pattern1)) {
      document.getElementById("customerId").innerHTML = " Invalid Customer ID";
      return false;
    } else if (!name) {
      document.getElementById("name").innerHTML = " Invalid Customer name";
      return false;
    } else if (town.length != 3) {
      document.getElementById("town").innerHTML =
        " Town code must be 3 characters";
      return false;
    } else if (!partNumber) {
      document.getElementById("partNumber").innerHTML =
        " Part Number cannot be missing";
      return false;
    } else if (!description) {
      document.getElementById("description").innerHTML =
        " Description cannot be missing";
      return false;
    } else if (isNaN(pricePerPart) || pricePerPart <= 0) {
      document.getElementById("pricePerPart").innerHTML = "Invalid price";
      return false;
    } else if (pattern2.test(quantity) || quantity <= 0) {
      document.getElementById("quantity").innerHTML = "Invalid quantity";
    } else {
      return salesTax(cost);
    }
  }

  // Function to compute the amount of the sales tax
  function salesTax(amount) {
    // This sends the cost to browser
    document.getElementById("cost").innerHTML = `$ ${cost}`;

    this.cost = amount;
    // Calculating the sales tax for Kampala, Mbarara, Entebbe and other towns
    if (town === "KLA") {
      tax = this.cost * 0.1;
    } else if (town === "EBB" || town === "MBR") {
      tax = this.cost * 0.05;
    } else {
      tax = 0.0;
    }

    // This send the Sales Tax to the browser
    document.getElementById("salesTax").innerHTML = `$ ${tax.toFixed(2)}`;

    // getter for the total tax
    this.getTax = function() {
      return tax;
    };

    return shippingHandling();
  }

  // Function to compute cost of shipping and handling
  function shippingHandling() {
    // Calculating the shipping cost
    if (shipping === "UPS") {
      shippingCost = 7.0;
    } else if (shipping === "Fed Ex Ground") {
      shippingCost = 8.5;
    } else if (shipping === "US Portal Air") {
      shippingCost = 9.25;
    } else {
      shippingCost = 12.0;
    }

    // Extra handling cost for oversize container
    if (oversize.checked) {
      handlingCost = 5.0;
    } else {
      handlingCost = 0.0;
    }

    // Calculating the total shipping and handling cost
    totalShippingCost = (quantity * (shippingCost + handlingCost)).toFixed(2);

    // This sends the total shipping and handling cost to the browser
    document.getElementById("handling").innerHTML = `$ ${totalShippingCost}`;

    // getter for total shipping cost
    this.getShippingCost = function() {
      return totalShippingCost;
    };

    return totalCost();
  }

  // Function to calculate the total cost
  function totalCost() {
    // Total cost = cost + tax + shipping cost
    // var total =
    //   parseFloat(cost) +
    //   parseFloat(window.tax) +
    //   parseFloat(window.totalShippingCost);
    var total = (
      parseFloat(cost) +
      parseFloat(window.totalShippingCost) +
      parseFloat(window.tax)
    ).toFixed(2);

    document.getElementById("total").innerHTML = `$ ${total}`;
  }

  validData();
  return false;
}
