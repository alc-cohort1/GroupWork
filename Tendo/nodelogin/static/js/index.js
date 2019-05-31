//Function to Validate Toyota form Elements

//Pick Values entered by User into Form Elements for Validation
// let id=document.getElementById('id');
// let name=document.getElementById('name');
// let state=document.getElementById('state');
// let partNo=document.getElementById('part-number');
// let description=document.getElementById('description');
// let price=document.getElementById('price-per-part').value;
// let quantity=document.getElementById('quantity');
function ValidData(){
    //Pick Values entered by User into Form Elements for Validation
    let id=document.getElementById('id');
    let name=document.getElementById('name');
    var state=document.getElementById('state');
    let partNo=document.getElementById('part-number');
    let description=document.getElementById('description');
    let price=document.getElementById('price-per-part').value;
    let quantity=document.getElementById('quantity');
    
    //ensure field is not empty and has no white space characters
    if(id.value==""  || isNaN(id.value)){
    alert('Field is Either Empty or Value Is Not a Number ');
    document.getElementsByTagName('<h5>').innerHTML="<font color=red>Field is Either Empty or Value Is Not a Number ";
        
    return;
    }
    // else {
    //     id.value.trim()
    //     return;
    // }
    
     //Validate name Field
     if(name.value==""){
       // document.getElementById('spn3').innerHTML="<font color=red>Sorry Name Field is empty";
        alert("Please Enter Customer Name");
        return;
      }
      
    
      if(2<state.length<4){
         alert("Please Ensure Code is 3 Digits ");
         //state.toPrecision(3)
         return;
       }
    
       
       //Ensure Part Number is not missing
       if(partNo.value==""){
          document.getElementsByTagName('h4').innerHTML="<font color=red>**";
    alert('Attention Please Enter a Part Number ');
    return;
       }
    
       //Ensure description is not missing
       if(description.value==""){
    alert('Please Enter a Description');
    return;
     }
    
    //Ensure Price is a number Greater than 0
     if(price<=0){
      alert('Price must be greater than 0');
      return;
       }
    //Ensure Quantity value is above 0
       if(quantity.value<=0){
        alert('Quantity must be Greater than 0');
        return;
         }
    
    //      let cost = (price * quantity);
    // alert('The Cost is '+cost.toFixed(0));
    // }
    
    // //Make Form Computations
    // function compute(){
    // let cost = (price * quantity);
    // //cost.toFixed(0);
    //alert('The Cost is'+cost.toFixed(0));
    
    
    // //capture form values
    // document.getElementById("submitForm").addEventListener("submit", capture);
    // document.getElementById("submitForm").addEventListener("submit", capture);
    // document.getElementById("submitForm").addEventListener("submit", capture);
    // document.getElementById("submitForm").addEventListener("submit", capture);
    
    
    //compute();
    
    }
    
    function clear(){
    
      document.getElementById('id').clear;
      document.getElementById('id').focus;
    document.getElementById('name').clear;
    document.getElementById('state').clear;
    document.getElementById('part-number').clear;
    document.getElementById('description').clear;
    document.getElementById('price-per-part').clear;
    document.getElementById('quantity').clear;
    return;
    }
    
    function compute(){
     
       alert('Form Values Captured');
    
      }
    
    
    //Window Close Function
    var myWindow;
    let option=false;
    
    // function closeWin() {
    //   if(option==true){
        
    //   }
    //   myWindow.close();
    // }
    
    // #org-admin
    
    function closeWin() {
      var retVal = confirm("Do you want to Close Program ?");
      if( retVal == true ) {
        alert(''+retVal.valueOf)
        //myWindow.close();
        // document.write ("User wants to continue!");
         return true;
      }
      else {
        // document.write ("User does not want to continue!");
         return false;
      }
    }