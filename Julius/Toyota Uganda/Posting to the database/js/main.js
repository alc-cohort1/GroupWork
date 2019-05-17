function validData() {
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

  // Regular expression pattern
  var pattern1 = /\s/;
  var pattern2 = /[^0-9]/;

  // Validating form inputs
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
    return false;
  }
  return true;
}
