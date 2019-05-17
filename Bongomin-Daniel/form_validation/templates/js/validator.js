

function Register_Form_Validator()
{
// Declaring input variables in the form
  var user_id = document.forms["RegForm"]["user_id"];
  var password = document.forms["RegForm"]["password"];
  var name = document.forms["RegForm"]["name"];
  var address = document.forms["RegForm"]["address"];
  var country = document.forms["RegForm"]["country"];
  var zip_code = document.forms["RegForm"]["zip_code"];
  var email = document.forms["RegForm"]["email"];
  
  
  
  

// if statement taht checks if the user id is null (empty)
  if (user_id.value == "") {
    document.getElementById("user_id_error").innerHTML="please Insert in your user_id"
    user_id.focus();
    return false;
  }
  
  
  
  /*----------------------------------
  validating the length of user id btween 5 and 12 
  --------------------------*/
  
  if (user_id.value.length < 5 || user_id.value.length > 12){
    document.getElementById("user_id_error").innerHTML = "* The user id must range between 5 and 12"
    user_id.focus();
    return false;
  
  }
  
  // Bongomin Daniel
  
  // if statements checking if the input fields are empty

  if (password.value == "") {
    document.getElementById("password_error").innerHTML = "* please you have not  filled in a password"
    user_id.focus();
    return false;
  }
  
  
  
  if(password.value.length < 7 || password.value.length > 12){
    document.getElementById("password_error").innerHTML = "* The user id must range between 7 and 12"
    user_id.focus();
    return false;
  }


  if (name.value == "") {
    document.getElementById("name").innerHTML = "* please provide your name"
    name.focus();
    return false;
  }
  
  if(name.value ===isNaN()){
    document.getElementById("name").innerHTML = "* the name should be in alphabetics change it"
    name.focus();
    return false;
  
  }


  if(country.value=== '1'){
    document.getElementById("country_error").innerHTML = "* please select a country"
    country.focus();
    return false;
  
  }
  
  

  if (zip_code.value == "") {
    document.getElementById("zip_code_error").innerHTML = "* please provide a zip code"
    zip_code.focus();
    return false;
  }
  
  
  if (email.value.indexOf("@", 0) < 0) {
    document.getElementById("email_error").innerHTML = "* please enter correct format of email"
      email.focus();
      return false;
  }
}

// Bongomin Daniel