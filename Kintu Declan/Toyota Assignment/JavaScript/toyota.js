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

let retail = document.getElementById('retail');
let container = document.getElementById('container');
document.getElementById('ups').checked=true
let shipping = document.getElementsByName('shiping');

function validateData()
{    
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

    // if(!re_price.test(price.value)){
    //     alert("Enter Price");
    //     return false;
    // }

    if(!re_quantity.test(quantity.value)){
        alert("Enter Quantity");
        return false;
    }

    compute();
}

function compute(){  
    //This block of code perform the the calculations of the tax and the total amount to be paid.
    let spng;
    
    //Calculating the cost and sales tax.
    let cost = price.value * quantity.value;
    let tax = (cost) * 0.1;
    
    //Includes the retailer discount.
    if(retail.checked){
        document.getElementById('tax_output').value = '$' + tax.toFixed(2);
    }
    else{
        tax = 0;
        document.getElementById('tax_output').value = '$' + tax;
    }
        
    //Adds the container costs.
    if(container.checked){
        container = 5;
    }
    else{
        container = 0;
    }
    
    //Handles the various costs depending on the shipping method.
    if(shipping[0].checked){
        spng = (quantity.value) * 7.00;
    }
    else if(shipping[1].checked){
        spng = (quantity.value) * 8.50;
    }
    else if(shipping[2].checked){
        spng = (quantity.value) * 9.25;
    }
    else if(shipping[3].checked){
        spng = (quantity.value) * 12.00;
    }

    document.getElementById('cost_output').value = '$'+ (cost).toFixed(2);
    document.getElementById('handling_output').value = '$' + spng.toFixed(2);
    document.getElementById('total_output').value = '$' + (container + cost + tax + spng).toFixed(2);
}

function newOrder(){
   document.getElementById("customer_id").value='';
   document.getElementById("name").value='';
   document.getElementById("state").value='';
   document.getElementById("description").value='';
   document.getElementById("part_num").value='';
   document.getElementById("price").value='';
   document.getElementById("quantity").value='';
   document.getElementById('retail').checked=false;
   document.getElementById('container').checked=false;
   document.getElementById('ups').checked=true;
   document.getElementById('cost_output').value = "";
   document.getElementById('tax_output').value = '';
   document.getElementById('handling_output').value = '';       
   document.getElementById('total_output').value = '';
}

function close_window() 
{
    if (confirm("Close Window?")) {
        window.location = "http://www.google.com/";
    }
}