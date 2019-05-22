    // This function support the rules of the application
    function validData(){

    //variables for accessing the form values
    // This won't allow spaces in this input
    var customer = /\s/; 

    // This will only accept numeric input only
    var quantityPattern = /[^0-9]/;
    var customerId = document.toyotaForm.customerId.value;
    var name = document.toyotaForm.name.value;
    var partInput = document.toyotaForm.partNumber.value;
    var description = document.toyotaForm.description.value;
    var pricePerPart = document.toyotaForm.pricePerPart.value;
    var quantity = document.toyotaForm.quantity.value;
    
    // To ensure the filled is filled without spaces
    if (customerId=="" || customerId.match(idPattern)) {
      document.getElementById("customerId").innerHTML = "Provide valid ID*"; 
      } else {
      document.getElementById("customerId").innerHTML = "";
    }
  
    // To make sure the user fills in the name field
    if(name==""){
      document.getElementById("name").innerHTML="Provide valid name*";
      } else {
      document.getElementById("name").innerHTML = "";
    }
  
    // Ensuring the input here is 3 characters
    if (townInput.length != 3) {
      document.getElementById("townInput").innerHTML ="Provide valid Town Code*";
      } else {
      document.getElementById("townInput").innerHTML = "";
    }
  
    // Cheking if part number is empty
    if (partNumber=="") {
      document.getElementById("partNumber").innerHTML = "Provide valid Part Number*";
      } else {
      document.getElementById("partNumber").innerHTML = "";
    }
  
    // Checking if description is empty
    if (description=="") {
      document.getElementById("description").innerHTML ="Provide valid description*";
      } else {
      document.getElementById("description").innerHTML = "";
    }
  
    // Checking if price per part must is a number and is greater than zero
    if (isNaN(pricePerPart) || pricePerPart <= 0) {
      document.getElementById("pricePerPart").innerHTML = "Provide valid price per part*";
      } else {
      document.getElementById("pricePerPart").innerHTML = "";
    }
  
    // Checking if quantity is not a number and is greater than zero
    if (quantityPattern.test(quantity) || quantity <= 0) {
      document.getElementById("quantity").innerHTML = " Provide quantity";
      } else {
      document.getElementById("quantity").innerHTML = "";
    }
  
    return false;
  }
  