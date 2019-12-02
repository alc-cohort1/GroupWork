// function named ValidData that enforces the business rules for the application.
function ValidData(event){
    
//VARIABLES FOR KEEPING FORM INPUTS 
    var customer_id = document.getElementById("customer_id");
    var name = document.getElementById("name");
    var state = document.getElementById("state");
    var part_num = document.getElementById("part_num");
    var desc = document.getElementById("description");
    var price_part = document.getElementById("price_part");
    var quantity = document.getElementById("quantity");

    var retail = document.getElementById("retail");
    var oversized = document.getElementById("oversized");
    var ups = document.getElementById("ups");
    var Fed_Ground = document.getElementById("Fed_Ground")
    var postal = document.getElementById("postal")
    var Fed_Air = document.getElementById("Fed_Air")
    
// checking to see if Customer ID is missing.
        if (customer_id.value=="") {
            document.getElementById("customer_id_error").innerHTML="Customer ID cannot be empty";
            customer_id.focus();
            return false;
            
        }          
// checking to see if customer ID does not contain any blank spaces.
        if (customer_id.value.match(/\ /)){
            document.getElementById("customer_id_error").innerHTML= "Choose a Customer ID that doesnot have a blank space ";
            customer_id.focus()
            return false;
        }
// checking to see if that the name input is not missing
        if (name.value==""){
            document.getElementById("name_error").innerHTML="Name can not be empty";
            name.focus();
            return false;
        }
// checking to confirm Town code entered is exactly three characters and alphabets only
        if (!(state.value.length===3)){
            document.getElementById("state_error").innerHTML="Town Code must be 3 digits only and alphabets";
            state.focus();
            return false;
        }
//Part Number cannot be missing.
        if (part_num.value==""){
            document.getElementById("part_num_error").innerHTML="Part Number cannot be missing";
            part_num.focus();
            return false;
        }
// Description cannot be missing.
        if (desc.value==""){
            document.getElementById("desc_error").innerHTML="Description cannot be missing";
            desc.focus(0);
            return false;
        }
// Price must be a number that is greater than zero.
        if (price_part.value.length<0){
            document.getElementById("price_part_error").innerHTML="Price must be a number greater than zero";
            price_part.focus();
            return false;
        }
// Quantity must be a number that is greater than zero.
        if (quantity.value.length<=0){
            document.getElementById("quantity_error").innerHTML="Quantity must be greater than zero";
            quantity.focus();
            return false;

// else part to remove the error from the quntity input 
        } else {
            document.getElementById("quantity_error").innerHTML = ""
      
      
// // Arrow function shippingHnalding to to compute the charge for both shipping and handling of an order
const shippingHandling = () =>{

            if(ups.checked){
                    ups = (quantity.value) * 7.00
                    document.getElementById('handling').innerHTML = '$' + ups.toFixed(2)
                }
            else{
                ups = 0;
            }
            if(Fed_Ground.checked){
            Fed_Ground = (quantity.value) * 8.50
            document.getElementById('handling').innerHTML = '$' + Fed_Ground.toFixed(2) 
        }
            else{
            Fed_Ground = 0
        }
           if(postal.checked){
            postal = (quantity.value) * 9.25
            document.getElementById('handling').innerHTML = `$${postal.toFixed(2)}`
        }
            else{
            postal = 0
        }
    
            if(Fed_Air.checked){
            Fed_Air = (quantity.value) * 12.00
            document.getElementById('handling').innerHTML = '$' + Fed_Air.toFixed(2)
        }
            else{
            Fed_Air = 0
        }

        }   
        shippingHandling();

        const cost = price_part.value * quantity.value
    

        // // Arrow function salesTax for compute the amount of sales tax           
                const salesTax = costs => {
        // // variable sell for computing the SalesTax    
                    var sell;
        
                    if(state.value === 'KLA' && retail.checked){
                    document.getElementById('sales').innerHTML = `$${(costs*0.1).toFixed(2)}`
                    sell = (costs*0.1)
                    }
        
                    else if((state.value === 'EBB'|| state.value === 'MBR') && retail.checked){
                        document.getElementById('sales').innerHTML = `$${(costs * 0.05).toFixed(2)}`;
                       sell = (costs*0.05)
                    }
        
                    else{
                        sell = 0;
                        document.getElementById('sales').innerHTML = '$' + sell;
                    }
        
                    if(oversized.checked){
                        oversized = 5;
                    }
                    else{
                        oversized = 0;            
                        }
        
                        document.getElementById('cost').innerHTML = '$'+ (cost).toFixed(2);
                        document.getElementById('total').innerHTML = '$' + (oversized + cost + sell + ups + Fed_Ground + postal + Fed_Air).toFixed(2)
                    }
        // invoking function salesTax and passing the parameter cost        
                    salesTax(cost);

        }
  
// 
    event.preventDefault();
    return true;
}
// // calling the function validata
ValidData();

function NewOrder(){
   document.getElementById("customer_id").value='';
   document.getElementById("name").value='';
   document.getElementById("state").value='';
   document.getElementById("description").value='';
   document.getElementById("part_num").value='';
   document.getElementById("price_part").value='';
   document.getElementById("quantity").value='';
   document.getElementById('retail').checked=true;
   document.getElementById('oversized').checked=false;
   document.getElementById('ups').checked=true;
   document.getElementById('cost').innerHTML = "";
   document.getElementById('sales').innerHTML = '';
   document.getElementById('handling').innerHTML = '';       
   document.getElementById('total').innerHTML = '';
}

