// validation function
function validation() { // declaring fields

    var customerId = document.forms["toyotaForm"]["customerId"];
    var name = document.forms["toyotaForm"]["name"];
    var state = document.forms["toyotaForm"]["state"];
    var retailCustomer = document.forms["toyotaForm"]["retailCustomer"];
    var partNumber = document.forms["toyotaForm"]["partNumber"];
    var description = document.forms["toyotaForm"]["description"];
    var price = document.forms["toyotaForm"]["price"];
    var quantity = document.forms["toyotaForm"]["quantity"];
    var cost = document.forms["toyotaForm"]["cost"];
    var salesTax = document.forms["toyotaForm"]["salesTax"];
    var salesAndHanding = document.forms["toyotaForm"]["salesAndHanding"];
    var total = document.forms["toyotaForm"]["total"];
    var compute_button = document.forms["toyotaForm"]["compute_button"];
    var new_Order_Btn = document.forms["toyotaForm"]["new_Order_Btn"];
    var exit_button = document.forms["toyotaForm"]["exit_button"];


    // computing the cost
       if (price.value == "")
           price.value = 0;
       if (quantity.value == "")
           quantity.value = 0;
       var result = parseInt(quantity.value) * parseInt(price.value) 
       if(!isNaN(result)) {
           document.getElementById('cost').value = result;
           cost.focus();
           return false;
       }else{
           if(quantity.value=="" && price.value==""){
               result ==0;
           }
       }

    //    calculating the sales tax

 
     

       





}
