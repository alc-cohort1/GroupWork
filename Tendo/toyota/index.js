//Function to Validate Toyota form Elements

function ValidData(){
//Pick Values entered by User into Form Elements for Validation
var id=document.getElementById('id');

//ensure field is not empty and has no white space characters
if(id.value==""){
alert('You Did not Enter an Id');
document.getElementById('id').innerHTML="<font color=red>Sorry Id Field cannot be left Empty";
    
return;
}
else {
    id.value.trim()
    return;
}

 //Validate name Field
 if(name.value==""){
   // document.getElementById('spn3').innerHTML="<font color=red>Sorry Name Field is empty";
    alert("Please Enter Customer Name");
    return;
  }

}
