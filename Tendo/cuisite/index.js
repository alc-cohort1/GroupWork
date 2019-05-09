
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
  if(id.value==NaN){
   if((id.value < 5) && (id.value >12))
    {
        alert("make sure the input is between 5-12 characters long");
        return;
    }}
  //Validate password Field
    if(password.value==""){
  alert("Sorry You did not Enter a password");
  
  document.getElementById('spn2').innerHTML="<font color=red>Sorry PassWord Field is empty";
         return;
   }
   //Validate name Field
  if((name.value=="")|| !isNaN(name.value)){
    document.getElementById('spn3').innerHTML="<font color=red>Sorry Name Field is empty";
    alert("Sorry Name Field is empty");
    return;
  }
  //Validate address Field
 // if((address.value=="")|| (address.value!="")){
  //  document.getElementById('spn4').innerHTML="<font color=red>This Field is Optional";
  //  return;
 // }
//Validate country Field
  if(country.value=="default"){
    document.getElementById('spnC').innerHTML="<font color=red>Sorry No Country is Selected";
    alert("Sorry No Country is Selected");
    return;
  }
//Validate zip Field
  if(zip.value<=0){
    document.getElementById('spn5').innerHTML="<font color=red>Please Select a Number Above 0";
    alert("Please Select a Number Above 0");
    return;
  }
//Validate email Field
var emailTest = /@./;

  if(!emailTest.test(email.value)){
    document.getElementById('spn6').innerHTML="<font color=red>Please Enter the write Email";
    alert("Please Enter the write Email");
    return;
  }
  //Validate country field
  if((country.value=="def_country")){
    document.getElementById('spn9').innerHTML="<font color=red>Attention You did not select a Country";
    alert("Sorry Name Field is empty");
    return;
  }

}
//Check wether atleast one Gender is selected
