// function to validate the signin form
function validSignInForm() {
  // // Variables for keeping the form values
  let username = document.signInForm.username.value;
  let password = document.signInForm.password.value;

  // // Function to validate the registration form
  if (!username) {
    document.getElementById("username").innerHTML = "User Name cannot be empty";
    return false;
  } else if (!password) {
    document.getElementById("password").innerHTML = "Password can be empty";
    return false;
  } else {
    // return true when all the form values passed the validation
    return true;
  }
}
