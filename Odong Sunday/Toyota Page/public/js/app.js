

function ValidateData()
{   
    const customerID = document.getElementById("customer_id_input");
    const re_customerID = /^[(A-Z)(0-9)-]{2,15}$/;
    
    const name = document.getElementById("name_value_input");
    const re_name = /^[a-zA-Z]{3,10}$/;

    const state = document.getElementById("state_input");
    const re_state = /^[A-Z1-9]{3}$/;

    const description = document.getElementById("description_value_input");
    const re_description = /^[a-zA-Z ]{5,20}$/;

    const partNumber = document.getElementById("part_number_value_input");
    const re_partNumber = /^[0-9]{2,6}$/;

    const price = document.getElementById("price_part_input");
    const re_price = /^[1-9].([0-9])?([0-9])?$/;

    const quantity = document.getElementById("quantity_input");
    const re_quantity = /^[1-9]([0-9])?$/;

    let cost = price.value * quantity.value
    let sales = (cost)/10;


    var retail = document.getElementById('retail');
    var oversizePrice = document.getElementById('oversize');
    var ups = document.getElementById('ups');
    var fedExGround = document.getElementById('fedExGround')
    var postal = document.getElementById('postal')
    var fedExAir = document.getElementById('fedExAir')

    if(!re_customerID.test(customerID.value)){
        document.getElementById("customer_span").innerHTML="Please Enter a Valid ID";
        return false;
    }
    else{
        document.getElementById("customer_span").innerHTML="";
    }

    if (!re_name.test(name.value)){
        document.getElementById("name_span").innerHTML = "Please Enter a Valid Name"
        return false;
    }

    else{
        document.getElementById("name_span").innerHTML = ""
    }

    if(!re_state.test(state.value)){
        document.getElementById("state_span").innerHTML = "Please Enter a Valid State"
        return false;
    }

    else{
        document.getElementById("state_span").innerHTML = ""
    }

    if(!re_partNumber.test(partNumber.value)){
        document.getElementById("number_span").innerHTML = "Please Enter a Valid Number"
        return false;
    }

    else{
        document.getElementById("number_span").innerHTML = ""
    }

    if(!re_description.test(description.value)){
        document.getElementById("description_span").innerHTML = "Please Enter a valid description"
        return false;
    }

    else{
        document.getElementById("description_span").innerHTML = ""
    }


    if (!re_price.test(price.value)){
        document.getElementById("price_span").innerHTML = "Enter Valid Price"
        return false;
    }

    else{
        document.getElementById("price_span").innerHTML = ""
    }


    if(!re_quantity.test(quantity.value)){
        document.getElementById("qtn_span").innerHTML = "Enter Valid Qty"
        return false;
    }

   

    else{

        if(retail.checked){
            document.getElementById('sales').innerHTML = '$' + sales.toFixed(2);
        }
        else{
            sales = 0;
            document.getElementById('sales').innerHTML = '$' + sales;
        }

        if(oversizePrice.checked){
            oversizePrice = 5;
        }
        else{
            oversizePrice = 0;
        }
        
        if(ups.checked){
            ups = (quantity.value) * 7.00
            document.getElementById('shipping').innerHTML = '$' + ups.toFixed(2)
        }

        else{
            ups = 0;
        }

        if(fedExGround.checked){
            fedExGround = (quantity.value) * 8.50
            document.getElementById('shipping').innerHTML = '$' + fedExGround.toFixed(2) 
        }

        else{
            fedExGround = 0
        }

        if(postal.checked){
            postal = (quantity.value) * 9.25
            document.getElementById('shipping').innerHTML = `$${postal.toFixed(2)}`
        }

        else{
            postal = 0
        }

        if(fedExAir.checked){
            fedExAir = (quantity.value) * 12.00
            document.getElementById('shipping').innerHTML = '$' + fedExAir.toFixed(2)
        }
        else{
            fedExAir = 0
        }
    
        document.getElementById('cost').innerHTML = '$'+ (cost).toFixed(2);
        document.getElementById('total').innerHTML = '$' + (oversizePrice + cost + sales + ups + fedExGround + postal + fedExAir).toFixed(2)
        return true;
    }

    

}


ValidateData();


function NewOrder(){
   document.getElementById("customer_id_input").value='';
   document.getElementById("name_value_input").value='';
   document.getElementById("state_input").value='';
   document.getElementById("description_value_input").value='';
   document.getElementById("part_number_value_input").value='';
   document.getElementById("price_part_input").value='';
   document.getElementById("quantity_input").value='';
   document.getElementById('retail').checked=true;
   document.getElementById('oversize').checked=false;
   document.getElementById('ups').checked=true;
   document.getElementById('cost').innerHTML = "";
   document.getElementById('sales').innerHTML = '';
   document.getElementById('shipping').innerHTML = '';       
   document.getElementById('total').innerHTML = '';
}



function close_window() {
    if (confirm("Close Window?")) {
        window.location = "http://www.google.com/";
    }
  }