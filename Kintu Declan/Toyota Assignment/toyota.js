// Form blur eventlistener

document.getElementById("customer_id").addEventListener('blur', validateCustomerId);
document.getElementById("name").addEventListener('blur', validateName);
document.getElementById("state").addEventListener('blur', validateState);
document.getElementById("part_num").addEventListener('blur', validatePartNumber);
document.getElementById("description").addEventListener('blur', validateDescription);
document.getElementById("price").addEventListener('blur', validatePrice);
document.getElementById("quantity").addEventListener('blur', validateQuantity);

function validateCustomerId()
{
    const customerID = document.getElementById("customer_id");
    const re = /^[(A-Z)(0-9)-]{2,15}$/;

    if(!re.test(customerID.value))
    {
        document.getElementById("customer_span").innerHTML="Please Enter a Valid ID";
    }

    else { document.getElementById("customer_span").innerText=""; }
}

function validateName()
{
    const name = document.getElementById("name");
    const re = /^[a-zA-Z]{3,10}$/;

    if(!re.test(name.value))
    {
        document.getElementById("name_span").innerHTML = "Please Enter a Valid Name";
    }

    else { document.getElementById("name_span").innerHTML = ""; }
}

function validateState()
{
    const state = document.getElementById("state");
    const re = /^[A-Z1-9]{3}$/;

    if(!re.test(state.value))
    {
        document.getElementById("state_span").innerHTML = "Please Enter a Valid State";
    }

    else { document.getElementById("state_span").innerHTML = ""; }
}

function validatePartNumber()
{
    const partNumber = document.getElementById("part_num");
    const re = /^[0-9]{2,6}$/;

    if(!re.test(partNumber.value))
    {
        document.getElementById("number_span").innerHTML = "Please Enter a Valid Number"
    }

    else { document.getElementById("number_span").innerHTML = ""; }
}

function validateDescription()
{
    const description = document.getElementById("description");
    const re = /^[a-zA-Z ]{5,20}$/;

    if(!re.test(description.value))
    {
        document.getElementById("description_span").innerHTML = "Please Enter a valid description"
    }

    else { document.getElementById("description_span").innerHTML = ""; }
}

function validatePrice()
{
    const price = document.getElementById("price");
    const re = /^[[1-9].([0-9])?$/;

    if(!re.test(price.value))
    {
        alert("Enter a valid price.")
    }

    else { document.getElementById("price_span").innerHTML=""; }
}

function validateQuantity()
{
    const quantity = document.getElementById("quantity");
    const re = /^[1-9]([0-9])?$/;

    if(!re.test(quantity.value))
    {
        alert("Enter a valid quantity.")
    }

    else { document.getElementById("qtn_span").innerHTML = ""; }
};
