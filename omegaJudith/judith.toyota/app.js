
/*below are variables holding id values */
document.getElementById("customer_id_input").addEventListener('blur', validateCustomerId);
document.getElementById("name_value_input").addEventListener('blur', validateName);
document.getElementById("state_input").addEventListener('blur', validateState);
document.getElementById("part_number_value_input").addEventListener('blur', validatePartNumber);
document.getElementById("description_value_input").addEventListener('blur', validateDescription);
document.getElementById("price_part_input").addEventListener('blur', validatePrice);
document.getElementById("quantity_input").addEventListener('blur', validateQuantity);


/*funtion name */
function validateCustomerId(){
    const customerID = document.getElementById("customer_id_input");
    const re = /^[(A-Z)(0-9)-]{2,15}$/;

    if(!re.test(customerID.value)){
        document.getElementById("customer_span").innerHTML="Please Enter a Valid ID";
    }

    else{
        document.getElementById("customer_span").innerText=""
    }
}

function validateName(){
    const name = document.getElementById("name_value_input");
    const re = /^[a-zA-Z]{3,10}$/;

    if(!re.test(name.value)){
        document.getElementById("name_span").innerHTML = "Please Enter a Valid Name"
    }

    else{
        document.getElementById("name_span").innerHTML = ""
    }
}

function validateState(){
    const state = document.getElementById("state_input");
    const re = /^[A-Z1-9]{3}$/;

    if(!re.test(state.value)){
        document.getElementById("state_span").innerHTML = "Please Enter a Valid State"
    }
    else{
        document.getElementById("state_span").innerHTML = ""
    }
}

function validatePartNumber(){
    const partNumber = document.getElementById("part_number_value_input");
    const re = /^[0-9]{2,6}$/;

    if(!re.test(partNumber.value)){
        document.getElementById("number_span").innerHTML = "Please Enter a Valid Number"
    }

    else{
        document.getElementById("number_span").innerHTML = "";
    }
}

function validateDescription(){
    const description = document.getElementById("description_value_input");
    const re = /^[a-zA-Z ]{5,20}$/;

    if(!re.test(description.value)){
        document.getElementById("description_span").innerHTML = "Please Enter a valid description"
    }
    else{
        document.getElementById("description_span").innerHTML = ""
    }
}

function validatePrice(){
    const price = document.getElementById("price_part_input");
    const re = /^[[1-9].([0-9])?$/;

    if(!re.test(price.value)){
        document.getElementById("price_span").innerHTML = "Enter Valid Price"
    }

    else{
        document.getElementById("price_span").innerHTML="";
    }
}

function validateQuantity(){
    const quantity = document.getElementById("quantity_input");
    const re = /^[1-9]([0-9])?$/;

    if(!re.test(quantity.value)){
        document.getElementById("qtn_span").innerHTML = "Enter Valid Qty"
    }

    else{
        document.getElementById("qtn_span").innerHTML = "";
    }
};
/*end of this form validation */