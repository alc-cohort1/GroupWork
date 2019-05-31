function validData() {
  // event.preventDefault();
  var customerid = document.getElementById("customerid").value;
  var name = document.getElementById("name").value;
  var townCode = document.getElementById("state").value;
  var partNumber = document.getElementById("partnumber").value;
  var description = document.getElementById("desc").value;
  var price = document.getElementById("per").value;
  var quantity = document.getElementById("quantity").value;
  var UPS = document.getElementById("ups").checked;
  var fedex = document.getElementById("fedex").checked;
  var postal = document.getElementById("postal").checked;
  var fedair = document.getElementById("fedair").checked;
  var size = document.getElementById("oversize").checked;
  // .....

  // ...

  if (customerid == "" || customerid.length < 11) {
    alert("Customer ID is missing and has space");
    document.getElementById("error1").innerHTML =
      "Customer ID is missing and has space";
    return false;
  }

  if (name == "") {
    alert("Customer Name is missing");
    document.getElementById("error2").innerHTML = "Customer Name is missing";
    return false;
  }

  if (townCode == "" || townCode.length > 3) {
    alert("Town Code should have three characters");
    document.getElementById("error3").innerHTML =
      "Town Code should have three characters";
    return false;
  }
  if (partNumber == "") {
    alert("Part number is missing");
    document.getElementById("error4").innerHTML =
      "Town Code should have three characters";
    return false;
  }
  if (description == "") {
    alert("Description is missing");
    document.getElementById("error5").innerHTML = "Description is missing";
    return false;
  }
  if (price == 0 || price == "" || isNaN(price)) {
    alert("Price must be greater than Zero");
    document.getElementById("error6").innerHTML =
      "Price must be greater than Zero";
    return false;
  }
  // ........

  cost = (price * quantity).toFixed(2);

  document.getElementById("Cost").value = cost;
  SalesTax(cost);

  ShippingHandling();
  var floattax = parseFloat(document.getElementById("tax").value);
  var floathandling = parseFloat(document.getElementById("handling").value);

  document.getElementById("Total").value = (
    floattax +
    floathandling +
    parseFloat(document.getElementById("Cost").value)
  ).toFixed(2);

  // .....

  function SalesTax(cost) {
    cost = document.getElementById("Cost").value;
    document.getElementById("state").value = "";
    switch (townCode) {
      case "KLA":
        document.getElementById("tax").value = (
          document.getElementById("Cost").value * 0.1
        ).toFixed(2);

        break;
      case "EBB":
        document.getElementById("tax").value = (
          document.getElementById("Cost").value * 0.05
        ).toFixed(2);

        break;
      case "MBR":
        document.getElementById("tax").value = (
          document.getElementById("Cost").value * 0.05
        ).toFixed(2);

        break;
      default:
        document.getElementById("tax").value = 0;
    }
  }

  function ShippingHandling() {
    if (size == true) {
      oversized();
    } else {
      notOversized();
    }
    function oversized() {
      if (fedex == true) {
        document.getElementById("handling").value = (
          quantity *
          (8.5 + 5)
        ).toFixed(2);
      }
      if (fedair == true) {
        document.getElementById("handling").value = (
          quantity *
          (5 + 12.0)
        ).toFixed(2);
      }
      if (UPS == true) {
        document.getElementById("handling").value = (
          quantity *
          (5 + 7.0)
        ).toFixed(2);
      }
      if (postal == true) {
        document.getElementById("handling").value = (
          quantity *
          (5 + 7.0)
        ).toFixed(2);
      }
    }

    function notOversized() {
      if (fedex == true) {
        document.getElementById("handling").value = (quantity * 8.5).toFixed(2);
      }
      if (fedair == true) {
        document.getElementById("handling").value = (quantity * 12.0).toFixed(
          2
        );
      }
      if (UPS == true) {
        document.getElementById("handling").value = (quantity * 7.0).toFixed(2);
      }
      if (postal == true) {
        document.getElementById("handling").value = (quantity * 7.0).toFixed(2);
      }
    }
  }
}
