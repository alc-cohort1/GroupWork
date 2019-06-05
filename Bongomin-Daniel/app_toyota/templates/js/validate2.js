/*--------------------------------------------------------------- 

Validate Function that handles Validation,Declaration of Vraiables

------------------------------------------------------------------*/
function validate() {
  // variables declaration
  var record = document.toyotaForm;
  var customerId = record.customerId.value;
  var name = record.name.value;
  var state = record.state.value;
  var partNumber = record.partNumber.value;
  var description = record.description.value;
  var price = record.price.value;
  var quantity = record.quantity.value;
  var shipping = document.toyotaForm.shipping.value;
  var oversize = document.toyotaForm.oversize;
  var retailCustomer = document.toyotaForm.retailCustomer;
  var cost = (price * quantity).toFixed(2);

/*-----------------------------------------------------------------------

validateData Function Handles Validation of input fields of the application

--------------------------------------------------------------------------*/
  function validData() {
    var pattern1 = /\s/;
    var pattern2 = /[^0-9]/;

    if (!customerId || customerId.match(pattern1)) {
      document.getElementById("customerId_err").innerHTML = " Invalid Customer ID";
      return false;
    } else if (!name) {
      document.getElementById("name_err").innerHTML = "  Customer name is missing";
      return false;
    } else if (state == "" || state.length < 3) {
      document.getElementById("state_err").innerHTML =
        " state code must be 3 characters";
      return false;
    } else if (!partNumber) {
      document.getElementById("partNumber_err").innerHTML =
        " Part Number cannot be missing";
      return false;
    } else if (!description) {
      document.getElementById("description_err").innerHTML =
        " Description cannot be missing";
      return false;
    } else if (isNaN(price) || price <= 0) {
      document.getElementById("price_err").innerHTML = "Invalid price";
      return false;
    } else if (pattern2.test(quantity) || quantity <= 0) {
      document.getElementById("quantity_err").innerHTML = "Invalid quantity";
    } else {
      return salesTax(cost);
    }
  }

  /*---------------------------------------------------------------------------------
  SalesTax Function Calculates the Amount of Sales Tax by taking tax,cost,town/state
  -----------------------------------------------------------------------------------*/

  function salesTax(amount) {
    document.getElementById("cost").innerHTML = `$ ${cost}`;

    this.cost = amount;
  /*--------------------------------------------------------------------
  Calculating the sales tax for Kampala, Mbarara, Entebbe and other towns
  ----------------------------------------------------------------------*/

    if (state === "KLA" && retailCustomer.checked) {
      tax = this.cost * 0.1;
    } else if (state === "EBB" && retailCustomer.checked) {
      tax = this.cost * 0.05;
    } else if (state === "MBR" && retailCustomer.checked) {
      tax = this.cost * 0.05;
    } else {
      tax = 0.0;
    }

   
    document.getElementById("salesTax").innerHTML = `$ ${tax.toFixed(2)}`;

    // getter for the total tax
    this.getTax = function() {
      return tax;
    };

    return shippingHandling();
  }
/*----------------------------------------------------------------
  function shippingHandling computes cost of shipping and handling
  ----------------------------------------------------------------*/

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

  /*------------------------------------------
  totalCost Function computes the total cost
  --------------------------------------------*/
  function totalCost() {
    var total = (
      parseFloat(cost) +
      parseFloat(window.totalShippingCost) +
      parseFloat(window.tax)
    ).toFixed(2);

    document.getElementById("total").innerHTML = `$ ${total}`;
    return true;
  }

  return validData();
  return false;
}

// exit button

$("#exit").click(function(){
  window.location.href="index.html";
});