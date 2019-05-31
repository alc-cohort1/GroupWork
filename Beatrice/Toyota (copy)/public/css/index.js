function orders() {
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
            if (!customerId || customerId.match(noSpace))
            {
                document.getElementById("customer_id").innerHTML="<b>Required and cannot contain blank spaces</b>";
                return false;
            } 
            else if (!name){
                document.getElementById("name").innerHTML="<b>Required</b>";
                return false;
            }
            else if (town.length != 3){
                document.getElementById("twn").innerHTML="<b>Town must be of three characters</b>";
                return false;
            }
            else if (!partno){
                document.getElementById("part_no").innerHTML="<b>Required</b>";
                return false;
            }
            else if(!description){
                document.getElementById("descripn").innerHTML="<b>Required</b>";
                return false;
            }
            else if(isNaN(price_per_part) || price_per_part <= 0){
                document.getElementById("ppp").innerHTML="<b>Price must be a number that is greater than zero</b>";
                return false;
            } 
            else if(num.test(quantity) || quantity <= 0){
                document.getElementById("qty").innerHTML="<b>Price must be a number that is greater than zero</b>";
                return false;                    
            } else {
                return salesTax(cost);
            }

        }
        /*
        This function computes the sales tax*/
        function salesTax(amount){
            //displaying cost
            document.getElementById("cost").innerHTML = `$ ${cost}`;
                
            this.cost = amount;
            // Calculating the sales tax for Kampala, Mbarara, Entebbe and other towns
            if (town === "KLA") {
                tax = this.cost * 0.1;
                } else if (town === "EBB" || town === "MBR") {
                tax = this.cost * 0.05;
                } else {
                tax = 0.0;
                }
            //Displaying the sales tax
            document.getElementById("salestax").innerHTML = `$ ${tax.toFixed(2)}`;

            // getter for the total tax
            this.getTax = function() {
            return tax;
            };
            return shippingHandling();
        }
        /*
        This function computes the cost of shipping and handling
        */
       function shippingHandling(){
            // Calculating the shipping cost
            if (shipping === "UPS") {
            shippingCost = 7.0;
            } else if (shipping === "Fed Ex Ground") {
            shippingCost = 8.5;
            } else if (shipping === "US Portal Air") {
            shippingCost = 9.25;
            } else {
            shippingCost = 12.0;
            }
            //oversize container
            if (oversize.checked) {
            handlingCost = 5.0;
            } else {
            handlingCost = 0.0;
            }
            //Calculating total shipping & handling cost
            totalShippingCost = (quantity * (shippingCost + handlingCost)).toFixed(2);
            //displaying total shipping and handling cost
            document.getElementById("shipping").innerHTML = `$ ${totalShippingCost}`;

            this.getshippingCost = function() {
            return totalShippingCost;
            };
            return totalCost();

       }
       // Function to calculate the total cost
       function totalCost(){
           var total = parseFloat(cost) + parseFloat(window.tax + parseFloat(window.totalShippingCost)).toFixed(2);
           //displaying total
           document.getElementById("total").innerHTML = `$ ${total}`;

           return closeMe();
       }  
       //Function that closes the window
    //    function closeMe(){
    //         document.getElementById("exit").addEventListener("click", function(){ 
    //             window.close();
    //         });
    //    } 
    validData();
    return false;
    
}  