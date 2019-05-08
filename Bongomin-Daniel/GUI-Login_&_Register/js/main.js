function validation() {

var email =document.getElementById('inputemail').value;
var password = document.getElementById('inputpassword').value;
var username = document.getElementById('usernameinput').value;
var confirm_password = document.getElementById('confirmpasswordinput').value;



// checking username
    if (username == "") {
        document.getElementById('usernameId').innerHTML = "* Please Fill in your username";
        return false;

    }

// checking if the the eanil is not filled and throughing an error
if(email==""){
document.getElementById('emailId').innerHTML="* Please Fill the Email";
return false;

}
// error for password emapty
if(password==""){
document.getElementById('passwordId').innerHTML="* please provide your password";
return false;

}
    if (confirm_password== "") {
        document.getElementById('confirmPasswordid').innerHTML = "* please insert a confirm_password";
        return false;

    }

if((password.length <3 || password.length >20)){
document.getElementById('passwordId').innerHTML="* the password should range between 3 and 20 chracters ! ";
return false;

}

if(password != confirm_password){
    document.getElementById('confirmPasswordid').innerHTML="passwords do not match"
}
    
}