
/*
This function validates the customer form to check if the user input is correct
*/
    function validData(){
        //Checking if customer id input is not left empty and has no blank spaces
        var customerId = document.form.customer_id.value.length;
        if (!customerId || customerID.match(keyCode == 32)){
            document.getElementById("customer_id").innerHTML="<b>Required and cannot contain blank spaces</b>";
            return false;
        }

        //Checking if customer_name input is not left empty
        var name = document.form.customer_name.value.length;
        if (name == "" )
        {
            document.getElementById("name").innerHTML="<b>Required</b>";
            return false;
        }
        //Checking if town input is of three characters
        var town = document.form.state.value.length;
        if (town == "" || town != 3)
        {
            document.getElementById("twn").innerHTML="<b>Town must be of three characters</b>";
            return false;
        }
        //Checking if part number input is not left empty
        var partno = document.form.partno.value.length;
        if (partno == "" )
        {
            document.getElementById("part_no").innerHTML="<b>Required</b>";
            return false;
        } 
        //Checking if Description input is not left empty
        var description = document.form.description.value.length;
        if (description == "" )
        {
            document.getElementById("descripn").innerHTML="<b>Required</b>";
            return false;
        }         
        //Checking if price is a number greater than zero
        var price_per_part = document.form.price.value.length;
        if (isNaN(price_per_part) || price_per_part == ""  || price_per_part <= 0)
        {
            document.getElementById("ppp").innerHTML="<b>Price must be a number that is greater than zero</b>";
            return false;
        } 
        //Checking if quantity is a number greater than zero
        var quantity = document.form.quantity.value.length;
        if (isNaN(quantity) || quantity == ""  || quantity <= 0)
        {
            document.getElementById("qty").innerHTML="<b>Price must be a number that is greater than zero</b>";
            return false;
        }  

        else{
            return true;
        }
        // //Calculating the cost
        // var Cost = price_per_part * quantity;
       
        //     document.getElementsByName("cost").innerHTML= Cost;
        
    }
  