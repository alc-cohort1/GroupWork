
   //This function validates All "regForm"  Field Elements
function validateFields(){
//Pick Values entered by User into Form Elements for Validation
  var  id = document.getElementById("id");
   var  password = document.getElementById("password");
   var  name = document.getElementById("name");
   var  address = document.getElementById("address");
   var  country = document.getElementById("country");
   var  zip = document.getElementById("zip");
   var  email = document.getElementById("email");
   var  male = document.getElementById("male").checked=true;
   var  fmale = document.getElementById("female").checked=false;
   var  ln_en = document.getElementById("lang_en");
   var  n_en = document.getElementById("non_en");
   var  tarea = document.getElementById("txtarea");

  
  //Validate Id Field input values
   if((id.value.length < 5) && (id.value.length >12))
    {
        alert("make sure the input is between 5-12 characters long");
    }
  //Validate password Field
    if(password.value==""){
  alert("Sorry You did not Enter a password");
   }
   //Validate name Field
  if((name.value=="")|| !isNaN(name.value)){
    document.getElementById('spn3').innerHTML="<font color=red>Sorry Field is empty";
    alert("Sorry Name Field is empty");
  }
  //Validate address Field
  if((address.value=="")|| (address.value!="")){
    document.getElementById('spn4').innerHTML="<font color=red>This Field is Optional";

  }
//Validate country Field
  if((country.value=="")|| !isNaN(country.value)){
    document.getElementById('spn5').innerHTML="<font color=red>Sorry Field is empty";
    alert("Sorry Name Field is empty");
  }
//Validate zip Field
  if((zip.value=="0")){
    document.getElementById('spn5').innerHTML="<font color=red>Please Select a Zip Code";
    alert("Sorry Name Field is empty");
  }
//Validate email Field
  if((email.value=="")|| !isNaN(email.value)){
    document.getElementById('spn7').innerHTML="<font color=red>Sorry Field is empty";
    alert("Sorry Name Field is empty");
  }
  //Validate country field
  if((country.value=="def_country")){
    document.getElementById('spn9').innerHTML="<font color=red>Attention You did not select a Country";
    alert("Sorry Name Field is empty");
  }
//Validate Zip filed
  if((zip.value=="")|| !isNaN(zip.value)){
    document.getElementById('spn3').innerHTML="<font color=red>Sorry Field is empty";
    alert("Sorry Name Field is empty");
  }

//Check wether atleast one Gender is selected
