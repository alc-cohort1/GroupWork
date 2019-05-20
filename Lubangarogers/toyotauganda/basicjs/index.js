/*
function systemsvalidations to work on validity of data filled up within the inputs

*/
function systemValidations(){
    //assigning variable cusId to an html element with an Id customer_ID
    var cusId = document.getElementById('customer_ID').value;
    //if statement to make sure the customer id field is not empty
    if (cusId == ""){
        document.getElementById('cusID_err').innerHTML="<b>cannot be missing and cannot contain blank spaces</b>";
        return false;
    }
 //assigning variable cusName to an html element with an Id Name
    var cusName = document.getElementById('Name').value;
    //if statement to make sure the name field is not empty
    if (cusName == ""){
        document.getElementById('name_err').innerHTML="<b>customer name cannot be missing</b>";
        return  false;
    }
     //assining variable partNum to an html element with an id partNum
    var partNum = document.getElementById('partNum').value;
    //condition statement to check and ensure that the part number field is not empty
    if(partNum == ""){
        document.getElementById('prtNo_err').innerHTML="<b>part number can't be empty</b>";
        return false;
    }
    //assining variable desc to an html element with an id description
    var desc = document.getElementById('description').value;
      //condition statement to check and ensure that the description field is not empty
    if(desc == ""){
        document.getElementById('desc_err').innerHTML="<b> Description can't be empty</b>"
        return false;
    }
     //assining variable price to an html element with an id price
    var price = document.getElementById('price').value;
     //condition statement to check and ensure that the price  entered is a number greater than zero
    if(isNaN(price) && price < 0){
        documet.getElementById('price_err').innerHTML="<b> Price must be a number that is greater than zero. </b>"
        return false;
    }

     //assining variable quantity to an html element with an id quantity
     var quantity = document.getElementById('price').value;
     //condition statement to check and ensure that the quantity  entered is a number greater than zero
    if(isNaN(quantity) && price < 0){
        documet.getElementById('quantity_err').innerHTML="<b> Price must be a number that is greater than zero. </b>"
        return false;
    }
// computing for total
var num1 =  parseInt(document.getElementById('cost').value);
var num2 =  parseInt(document.getElementById('sales_tax').value);
var num3 =  parseInt(document.getElementById('Shipping').value);
var total = num1 + num2 + num3;
document.getElementById('total_x').innerHTML=total;

}