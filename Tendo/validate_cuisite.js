
  // var  idNum = document.getElementById("id");//get value from id field
  // var  password = document.getElementById("password");//get value from password field
   //var  name = document.getElementById("name");//get value from name field
   //var  address = document.getElementById("address");//get value from address field
   //var  country = document.getElementById("country");//get value from country field
   //var  zip = document.getElementById("zip");//get value from zip field
   var  email = document.getElementById("email");//get value from email field
   var  male = document.getElementById("male");//get value from male field
   var  fmale = document.getElementById("female");//get value from female field
   var  ln_en = document.getElementById("lang_en");//get value from English Checkbox field
   var  n_en = document.getElementById("non_en");//get value from Non-English Checkbox field
   var  tarea = document.getElementById("txtarea");//get value from Text area field

   //This function validates id field  input length
function checkLength(){
  var  id = document.getElementById("id");//get value from id field
   var  password = document.getElementById("password");//get value from password field
   var  name = document.getElementById("name");//get value from name field
   var  address = document.getElementById("address");//get value from address field
   var  country = document.getElementById("country");//get value from country field
   var  zip = document.getElementById("zip");//get value from zip field
  
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
  if((address.value=="")|| (name.value!="")){
    document.getElementById('spn4').innerHTML="<font color=red>This Field is Optional";

  }
//Validate country Field
  if((country.value=="")|| !isNaN(name.value)){
    document.getElementById('spn5').innerHTML="<font color=red>Sorry Field is empty";
    alert("Sorry Name Field is empty");
  }
//Validate zip Field
  if((zip.value=="0")){
    document.getElementById('spn5').innerHTML="<font color=red>Please Select a Zip Code";
    alert("Sorry Name Field is empty");
  }
//Validate email Field
  if((email.value=="")|| !isNaN(name.value)){
    document.getElementById('spn7').innerHTML="<font color=red>Sorry Field is empty";
    alert("Sorry Name Field is empty");
  }

  //Validate country field
  if((country.value=="def_country")){
    document.getElementById('spn9').innerHTML="<font color=red>Attention You did not select a Country";
    alert("Sorry Name Field is empty");
  }
//Validate 
  if((zip.value=="")|| !isNaN(name.value)){
    document.getElementById('spn3').innerHTML="<font color=red>Sorry Field is empty";
    alert("Sorry Name Field is empty");
  }
}