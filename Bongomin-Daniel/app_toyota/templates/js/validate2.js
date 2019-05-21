function validate() {

    var customerId = document.forms["toyotaForm"]["customerId"];
    var name = document.forms["toyotaForm"]["name"];
    var state = document.forms["toyotaForm"]["state"];
    var retailCustomer = document.forms["toyotaForm"]["retailCustomer"];
    var partNumber = document.forms["toyotaForm"]["partNumber"];
    var description = document.forms["toyotaForm"]["description"];
    var price = document.forms["toyotaForm"]["price"];
    var quantity = document.forms["toyotaForm"]["quantity"];
    // var cost = document.forms["toyotaForm"]["cost"];
    var cost = (price * quantity).toFixed(2);
    var salesTax = document.forms["toyotaForm"]["salesTax"];
    var salesAndHanding = document.forms["toyotaForm"]["salesAndHanding"];
    var total = document.forms["toyotaForm"]["total"];
    var shipping = document.toyotaForm.shipping.value;

  // This function validate the input fields
  function validData() {
    var pattern1 = /\s/;
    var pattern2 = /[^0-9]/;

    if (!customerId.value || customerId.value.match(pattern1)) {
      document.getElementById("customerId_err").innerHTML = " Invalid Customer ID";
      return false;
    } else if (!name.value) {
      document.getElementById("name_err").innerHTML = "  Customer name is missing";
      return false;
    } else if (state.value == "" || state.length <= 3) {
      document.getElementById("state_err").innerHTML =
        " state code must be 3 characters";
      return false;
    } else if (!partNumber.value) {
      document.getElementById("partNumber_err").innerHTML =
        " Part Number cannot be missing";
      return false;
    } else if (!description.value) {
      document.getElementById("description_err").innerHTML =
        " Description cannot be missing";
      return false;
    } else if (isNaN(price.value) || price.value <= 0) {
      document.getElementById("price_err").innerHTML = "Invalid price";
      return false;
    } else if (pattern2.test(quantity.value) || quantity.value <= 0) {
      document.getElementById("quantity_err").innerHTML = "Invalid quantity";
    } else {
      return salesTax(cost);
    }
  }

  // Function to compute the amount of the sales tax
  function salesTax(amount) {
    // This sends the cost to browser
    document.getElementById("cost").innerHTML = `$ ${cost}`;

    cost = amount;
    // Calculating the sales tax for Kampala, Mbarara, Entebbe and other towns
    if (state.value === "KLA") {
      tax = this.cost * 0.1;
    } else if (state.value === "EBB" || state.value === "MBR") {
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
    var total =
      parseFloat(cost) +
      parseFloat(window.tax + parseFloat(window.totalShippingCost)).toFixed(2);

    document.getElementById("total").innerHTML = `$ ${total}`;
  }

  validData();
  return false;
}
