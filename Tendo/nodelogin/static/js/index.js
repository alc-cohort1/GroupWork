//Function to Validate Toyota form Elements

//Sets Default settings on startup
function start(){
  document.getElementById('id').focus();
  document.getElementById("cust").checked=true;
  document.getElementById('oversize-container').checked=false;
}

function ValidData(){
  //Pick Values entered by User into Form Elements for Validation
  let id=document.getElementById('id');
  let name=document.getElementById('name');
  let state=document.getElementById('state');
  let partNo=document.getElementById('part-number');
  let description=document.getElementById('description');
  let price=document.getElementById('price-per-part').value;
  let quantity=document.getElementById('quantity');
  let towncode= ["KLA","EBB","MBR"];
  //ensure field is not empty and has no white space characters
  if(id.value==""  || isNaN(id.value)){
  alert('Field is Either Empty or Value Is Not a Number ');
  document.getElementsByTagName('<h5>').value="<font color=red>Field is Either Empty or Value Is Not a Number ";
      
  return;
  }
  
  
   //Validate name Field
   if(name.value==""){
     // document.getElementById('spn3').innerHTML="<font color=red>Sorry Name Field is empty";
      alert("Please Enter Customer Name");
      return;
    }
    
  
    if(state.length!==3){
      // document.getElementById('spn3').innerHTML="<font color=red>Sorry Name Field is empty";
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
       return true;
  }

  //COST : computes purchases
  function calcCost(){
    let price = document.getElementById('Price').value;
    let quantity=document.getElementById('price-per-part').value;
    let cst = (price*quantity);
     
    alert('The Value is'+cst+' and the Rounded  to'+cst.toFixed(0));
     return cst.toFixed(0);
  }
 
let cost = calcCost();
       //SALES TAX :computes sales taxes
  function salesTax(cost){
    let validate = ValidData();
    let town=document.getElementById('state').value.toUpperCase();
    let towncode= ["KLA","EBB","MBR"];
  let customerType=document.getElementById("cust").checked;
  if(validate==true){
    if(town==towncode[0] && customerType==true){
      alert('Client Has to Pay '+cost+'Including a Tax of '+(cost*(10/100)));
      return (cost*(10/100));
    }
    if((town==towncode[1] || town==towncode[2]) && customerType==true ){
      alert('EBB or MBR Tax is '+(cost*(5/100))+'%');
      return (cost*(5/100));
    }

    if((town!=towncode[0] || town!=towncode[1] || town!=towncode[2])  && customerType==true){
      alert('This Customer Has to pay '+cost+" With No Tax");
      return;
    }
    else if(customerType==false){
      alert(cost);
    }
    else 
    return;
  }
      
    }

  //CLEAR: this function maintains only one shipping option selected
  
function select(radio){
  // let handling = radio;
  // let shippingCharge = [7.00,8.50,9.25,12.00];
  // var charge;
  
  // alert('You Selected a Radio Button');
  // switch(handling) {
  //   case 1:
  //     document.getElementById('ups').checked=true;
  //     document.getElementById('fedexg').checked=false;
  //     document.getElementById('usportal').checked=false;
  //     document.getElementById('fedexa').checked=false;
  //     charge = shippingCharge[0];
  //     alert('You Selected UPS and The Charge is  '+charge);
  //     break;
  //   case 2:
  //       document.getElementById('ups').checked=false;
  //       document.getElementById('fedexg').checked=true;
  //       document.getElementById('usportal').checked=false;
  //       document.getElementById('fedexa').checked=false;
  //     charge = shippingCharge[2];
  //     alert('You Selected Fedex Ground and The Charge is  '+charge);
  //     break;
  //   case 3:
  //       document.getElementById('ups').checked=false;
  //       document.getElementById('fedexg').checked=false;
  //       document.getElementById('usportal').checked=true;
  //       document.getElementById('fedexa').checked=false;
  //     charge=shippingCharge[1];
  //     alert('You Selected US Air Portal and The Charge is  '+charge);
  //     break;
  //     case 4:
  //         document.getElementById('ups').checked=false;
  //         document.getElementById('fedexg').checked=false;
  //         document.getElementById('usportal').checked=false;
  //         document.getElementById('fedexa').checked=true;
  //         charge=shippingCharge[3];
  //         alert('You Selected Fedex Air and The Charge is  '+charge);
  //       break;
  //   default:
  //       document.getElementById('ups').checked=false;
  //       charge = shippingCharge[0];
  // }

  let shippingCharge = [7.00,8.50,9.25,12.00];
  let ups= document.getElementById('ups').checked=true;
  let fedexg=document.getElementById('fedexg').checked=false;
let usportal=document.getElementById('usportal').checked=false;
let fedexa=document.getElementById('fedexa').checked=false;

if(radio===4){
  document.getElementById('ups').checked=false;
  document.getElementById('fedexg').checked=false;
document.getElementById('usportal').checked=false;
}
if(radio==2){
  document.getElementById('ups').checked=false;
document.getElementById('usportal').checked=false;
document.getElementById('fedexa').checked=false;
}
if(radio===3){
 
  document.getElementById('ups').checked=false;
 document.getElementById('fedexg').checked=false;
document.getElementById('fedexa').checked=false;
}
else if(radio==1){
 document.getElementById('fedexg').checked=false;
  document.getElementById('usportal').checked=false;
  document.getElementById('fedexa').checked=false;
}
else 
return;
}
  //This clears Text fields back to their defaults
  function clear(){
    document.getElementById('id').value='';
  document.getElementById('name').value='';
  document.getElementById('state').value="";
  document.getElementById('part-number').value="";
  document.getElementById('description').value="";
  document.getElementById('price-per-part').value="";
  document.getElementById('Price').value="";
  document.getElementById('quantity').value="";
  document.getElementById('cost').value="";
  document.getElementById('tax').value="";
  document.getElementById('shipping').value="";
  document.getElementById('total').value="";
  return;
  }
  
 
  

    //This Computes Shipping and Handling Cost
    function ShippingHandling(){
     
      var charge;
    let shippingCharge = [7.00,8.50,9.25,12.00];
    let ups= document.getElementById('ups').checked;
    let fedexg=document.getElementById('fedexg').checked=false;
    let usportal=document.getElementById('usportal').checked=false;
    let fedexa=document.getElementById('fedexa').checked=false;
    let oversizeContainer = document.getElementById('oversize-container').checked;
    let extraHandlingCharge=5.00;
  
   alert('Shipping is '+oversizeContainer);
   if(fedexg==true){
charge=shippingCharge[2];
//alert('The Charge is '+charge);
return charge;
   }
   else if(fedexg==true && oversizeContainer==true){
     return (charge+extraHandlingCharge);
   }

   if(fedexa==true){
    charge=shippingCharge[3];
  //  alert('The Charge is '+charge);
    return charge;
   }
   else if(fedexa==true && oversizeContainer==true){
    return (charge+extraHandlingCharge);
  }
   if(usportal==true){
    charge=shippingCharge[1];
    //alert('The Charge is '+charge);
    return charge ;
   }
   else if(usportal==true && oversizeContainer==true){
    return (charge+extraHandlingCharge);
  }

  if(ups==true){
    charge=shippingCharge[0];
    //alert('The Charge is '+charge);
    return charge ;
   }
   else if(ups==true && oversizeContainer==true){
    return (charge+extraHandlingCharge);
  }
  
  return;
  }

    //This computes Total Cost
    function totalCost(){
         let total = cost + salesTax() +ShippingHandling();
        alert('The Total is '+total);
         return total;
    }
  
  //displays Purchase results to Display Panel
  function display(){

    document.getElementById('cost').value=salesTax();
    document.getElementById('tax').value=totalCost();
    document.getElementById('shipping').value=ShippingHandling()
    document.getElementById('total').value=totalCost();


    return;
  }

  //This is called by The Compute Button 
  function compute(){
  if(ValidData==true){
    salesTax();
    ShippingHandling();
    display();
  }
  else 
  alert('Some thing Went Wrong');
  return ;
  }
  //Reset Radio Buttons Back to defaults
  function resetRadioButtons(){
document.getElementById('ups').checked=true;
document.getElementById('fedexg').checked=false;
document.getElementById('usportal').checked=false;
document.getElementById('fedexa').checked=false;


document.getElementById("cust").checked=true;
document.getElementById("oversize-container").checked=false;
return;
  }
  //Makes a New Order resets all elements to default
  function newOrder(){
    clear();
 document.getElementById("cust").checked=true;
document.getElementById("oversize-container").checked=false;
resetRadioButtons();
document.getElementById('id').focus();
return;
  }

  //toggles Password Visibility
  function togglePassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
  //Window Close Function
  // var myWindow;
  // let option=false;
  
  function closeWin() {
    var myWindow;
    let option=false;
    var retVal = confirm("Do you want to Close Program ?");
    if( retVal == true ) {
     // alert(''+retVal)
      myWindow.close();
      // document.write ("User wants to continue!");
       return true;
    }
    else {
      // document.write ("User does not want to continue!");
       return false;
    }
  }

  