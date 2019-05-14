// Validation function that checks for all the fields of the sales application when compute button is clicked.
function validData() {

    // Variable to check whether the customerId is missing and has any blank spaces
    var customerId = document.sales_form.customer_id.value;
    if (customerId == "") {
        document.getElementById("customer_id_error").innerHTML="<b>Required and cannot contain blank spaces.</b>";
        return false;
    }

    // Variable to check whether the name is missing
    var name = document.sales_form.name.value;
    if (name == "") {
        document.getElementById("name_error").innerHTML="<b>Customer Name cannot be missing</b>";
        return false;
    }

    // Variable to check whether town code is entered as three characters
    var town = document.sales_form.town.value;
    if (town.length != 3 ) {
        document.getElementById("town_error").innerHTML="<b>Town code must always be entered as exactly three characters</b>";
        return false;
    }

    // Variable to check whether the part is missing
    var part = document.sales_form.part.value;
    if (part == "") {
        document.getElementById("part_error").innerHTML="<b>Part Number cannot be missing.</b>";
        return false;
    }

    // Variable to check whether description is missing
    var description = document.sales_form.description.value;
    if (description == "") {
        document.getElementById("description_error").innerHTML="<b>Description cannot be missing.</b>";
        return false;
    }

    // Variable to check whether price is greater than zero
    var pricePerPart = document.sales_form.sales_per_part.value;
    if (pricePerPart <= 0 ) {
        document.getElementById("price_erro").innerHTML="<b>Price must be a number that is greater than zero.</b>";
        return false;
    }

    // Variable to check whether quantity is greater than zero
    var quantity = document.sales_form.quantity.value;
    if (quantity < 0) {
        document.getElementById("quantity_error").innerHTML="<b>Quantity must be a number that is greater than zero.</b>";
        return false;
    }
}