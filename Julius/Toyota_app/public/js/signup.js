// Function to validate the registration form
function validSignUpForm() {
  // // Variables for keeping the form values
  let username = document.signUpForm.username.value;
  let email = document.signUpForm.email.value;
  let password = document.signUpForm.password.value;
  let confirmedPassword = document.signUpForm.confirmedPassword.value;

  // // Function to validate the registration form
  if (!username.match(/^[a-zA-Z]+$/)) {
    document.getElementById("username").innerHTML = "Enter a correct user name";
    return false;
  } else if (/\S+@\S+/.test(email) === false) {
    document.getElementById("email").innerHTML =
      "Enter a correct email address";
    return false;
  } else if (password.length < 5 || password.length > 12) {
    document.getElementById("password").innerHTML =
      "Enter a password of length 5 to 12.";
    return false;
  } else if (confirmedPassword !== password) {
    document.getElementById("confirmedPassword").innerHTML =
      "Password is not matching!";
    return false;
  } else {
    // return true when all the form values passed the validation
    return true;
  }
}
