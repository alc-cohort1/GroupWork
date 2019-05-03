
// function that holds Form Registartion code
function Register_Form_Validator()
{
// Declaring input variables in the form
  var user_id = document.forms["RegForm"]["user_id"];
  var password = document.forms["RegForm"]["password"];
  var name = document.forms["RegForm"]["name"];
  var address = document.forms["RegForm"]["address"];
  var zip_code = document.forms["RegForm"]["zip_code"];
  var email = document.forms["RegForm"]["email"];

// if statement taht checks if the user id is null (empty)
  if (user_id.value == "") {
    window.alert("Please enter your user_id.");
    user_id.focus();
    return false;
  }
  
  // checking the user_id length
  
  if(user_id.length < 3 || user_id > 20){
  document.getElementById("userid").innerHTML="The user id should between 3 and 20";
  
  }
  // Bongomin Daniel
  
  // if statements checking if the input fields are empty

  if (password.value == "") {
    window.alert("Please enter your password.");
    password.focus();
    return false;
  }

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (address.value == "") {
    window.alert("Please enter your address.");
    address.focus();
    return false;
  }

  if (zip_code.value == "") {
    window.alert("Please enter your name.");
    zip_code.focus();
    return false;
  }
  if (email.value.indexOf("@", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
  }

  if (email.value.indexOf(".", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
  }

  if (what.selectedIndex < 1) {
    alert("Please enter your country.");
    what.focus();
    return false;
  }
}
// function for validating numeric values for user_id
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
// Bongomin Daniel