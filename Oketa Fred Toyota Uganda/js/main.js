function sales() {
  // Variables for keeping the form values
  const record = document.salesForm;
  const customerId = record.customerId.value;
  const name = record.name.value;
  const town = record.town.value;
  const partNumber = record.partNumber.value;
  const description = record.description.value;
  const pricePerPart = record.pricePerPart.value;
  const quantity = record.quantity.value;
  const shipping = document.salesForm.shipping.value;
  const oversize = document.salesForm.oversize;
  const retailCustomer = document.salesForm.retailCustomer;
  const cost = (pricePerPart * quantity).toFixed(2);

  // This function validate the input fields
  function validData() {
    var regex1 = /\s/;
    var regex2 = /[^0-9]/;

    if (!customerId || customerId.match(regex1)) {
      document.getElementById("customerId").innerHTML =
        "Customer ID is required and must be correct.";
      return false;
    } else if (!name) {
      document.getElementById("name").innerHTML = "Customer Name is required.";
      return false;
    } else if (town.length != 3) {
      document.getElementById("town").innerHTML =
        "Must be 3 letters";
      return false;
    } else if (!partNumber) {
      document.getElementById("partNumber").innerHTML =
        "Part Number is required.";
      return false;
    } else if (!description) {
      document.getElementById("description").innerHTML =
        "Description is required.";
      return false;
    } else if (isNaN(pricePerPart) || pricePerPart <= 0) {
      document.getElementById("pricePerPart").innerHTML = "Invalid price";
      return false;
    } else if (regex2.test(quantity) || quantity <= 0) {
      document.getElementById("quantity").innerHTML = "Invalid quantity";
      return false;
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
    if (town === "KLA" && retailCustomer.checked) {
      tax = this.cost * 0.1;
    } else if (town === "EBB" && retailCustomer.checked) {
      tax = this.cost * 0.05;
    } else if (town === "MBR" && retailCustomer.checked) {
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
