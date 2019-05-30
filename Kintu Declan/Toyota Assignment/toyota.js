

function ValidateData()
{   
    //Variable input from the Toyota HTML page are declared here.
    const customerID = document.getElementById("customer_id");
    const re_customerID = /^[(A-Z)(0-9)-]{2,15}$/;
    
    const name = document.getElementById("name");
    const re_name = /^[a-zA-Z]{3,10}$/;

    const state = document.getElementById("state");
    const re_state = /^[A-Z1-9]{3}$/;

    const description = document.getElementById("description");
    const re_description = /^[a-zA-Z ]{5,20}$/;

    const partNumber = document.getElementById("part_num");
    const re_partNumber = /^[0-9]{2,6}$/;

    const price = document.getElementById("price");
    const re_price = /^[1-9].([0-9])?([0-9])?$/;

    const quantity = document.getElementById("quantity");
    const re_quantity = /^[1-9]([0-9])?$/;

    let cost = price.value * quantity.value
    let sales = (cost)/10;


    var retail = document.getElementById('retail');
    var container = document.getElementById('container');
    var ups = document.getElementById('ups');
    var fed_ex_g = document.getElementById('fed_ex_g')
    var us_postal = document.getElementById('us_postal')
    var fed_ex_a = document.getElementById('fed_ex_a')

    //Validation of the input fields within the Toyota HTML page.
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

    //This block of code perform the the calculations of the tax and the total amount to be paid.
    else{

        if(retail.checked){
            document.getElementById('tax').innerHTML = '$' + tax.toFixed(2);
        }
        else{
            tax = 0;
            document.getElementById('tax').innerHTML = '$' + tax;
        }

        if(container.checked){
            container = 5;
        }
        else{
            container = 0;
        }
        
        if(ups.checked){
            ups = (quantity.value) * 7.00
            document.getElementById('shipping').innerHTML = '$' + ups.toFixed(2)
        }

        else{
            ups = 0;
        }

        if(fed_ex_g.checked){
            fed_ex_g = (quantity.value) * 8.50
            document.getElementById('shipping').innerHTML = '$' + fedExGround.toFixed(2) 
        }

        else{
            fed_ex_g = 0
        }

        if(us_postal.checked){
            us_postal = (quantity.value) * 9.25
            document.getElementById('shipping').innerHTML = `$${postal.toFixed(2)}`
        }

        else{
            us_postal = 0
        }

        if(fed_ex_a.checked){
            fed_ex_a = (quantity.value) * 12.00
            document.getElementById('shipping').innerHTML = '$' + fedExAir.toFixed(2)
        }
        else{
            fed_ex_a = 0
        }
    
        document.getElementById('cost').innerHTML = '$'+ (cost).toFixed(2);
        document.getElementById('total').innerHTML = '$' + (oversizePrice + cost + tax + ups + fed_ex_g + us_postal + fed_ex_a).toFixed(2)
        return true;
    }

    

}


ValidateData();


function NewOrder(){
   document.getElementById("customer_id").value='';
   document.getElementById("name").value='';
   document.getElementById("state").value='';
   document.getElementById("description").value='';
   document.getElementById("part_num").value='';
   document.getElementById("price").value='';
   document.getElementById("quantity").value='';
   document.getElementById('retail').checked=true;
   document.getElementById('container').checked=false;
   document.getElementById('ups').checked=true;
   document.getElementById('cost').innerHTML = "";
   document.getElementById('tax').innerHTML = '';
   document.getElementById('shipping').innerHTML = '';       
   document.getElementById('total').innerHTML = '';
}



function close_window() {
    if (confirm("Close Window?")) {
        window.location = "http://www.google.com/";
    }
  }