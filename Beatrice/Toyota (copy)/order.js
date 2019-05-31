function  orders(){
    //Variables that keep values from the form inputs
    var customerId = document.form.customer_id.value;
    var name = document.form.customer_name.value;
    var town = document.form.state.value;
    var partno = document.form.partno.value;
    var description = document.form.description.value;
    var price_per_part = document.form.price.value;
    var quantity = document.form.quantity.value;
    var shipping = document.form.shipping.value;
    var oversize = document.form.oversizecontainer.value;
    var cost = (price_per_part * quantity).toFixed(2);//to two decimal places

    /*
    This function validates the customer form to check if the user input is correct
    */
    function validData(){
        var noSpace = /\s/;
        var num = /[^0-9]/;
        if (!customerId || customerId.match(noSpace)){
            document.getElementById("customer_id").innerHTML="<b>Required and cannot contain blank spaces</b>";
            return false;
        } else if (!name){
            document.getElementById("name").innerHTML="<b>Required</b>";
            return false;
        }
    }
}