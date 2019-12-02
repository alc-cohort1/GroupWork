


				
		
		
    //function called on form submission to validate different form inputs
	function ValidData(){   
		//assigning  values from the form to variables
	    var CustomerId=document.formToyota.customerId.value; 

	    var CustomerName=document.formToyota.customerName.value;
		var TownCode=document.formToyota.town.value;
		var PartNumber=document.formToyota.partNo.value;
		var Description=document.formToyota.desc.value;
		var Price=document.formToyota.price.value;
		var Quantity=document.formToyota.quantity.value;
		var RetailCustomer=document.getElementById("customer").checked;
		var OverSize=document.getElementById("oversize").checked;
		var UPS=document.getElementById("ups").checked;
		var FedExGround=document.getElementById("fedGround").checked;
		var UsPostalAir=document.getElementById("usPostal").checked;
		var FedExAir=document.getElementById("fedAir").checked;
 

 var errormessage = "";
	if (CustomerId==null || CustomerId=="")
				{

				 document.formToyota.customerId.focus() ;
				 document.getElementById('customerId').style.borderColor ="red";
				 document.getElementById("customerId").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv").style.display = 'block';
				errormessage="           "+"Please the customer Id is needed";
				document.getElementById('error').innerHTML=errormessage;
				
				return false;
				
				}
				 var str = CustomerId;
				
				if (str.match(/\s/g)!==null) {
					
						 document.formToyota.customerId.focus() ;
				 document.getElementById('customerId').style.borderColor ="red";
				 document.getElementById("customerId").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv").style.display = 'block';
				errormessage="           "+"Please the customer Id is should not contain spaces";
				document.getElementById('error').innerHTML=errormessage;
				return false;

				}
        //checking if the custmer Name is empty
				if (CustomerName==null || CustomerName=="")
				{
			
				
				document.formToyota.customerName.focus();
				 document.getElementById('customerName').style.borderColor ="red";
				 document.getElementById("customerName").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv1").style.display = 'block';
				errormessage="           "+"Please the customer Name is needed";
				document.getElementById('error1').innerHTML=errormessage;
				return false;
				
				}
				//checking  if the length of entered town code is less than 3 and greater than 0	
	
				if(TownCode.length<3 || TownCode.length>3) {
				
				
				document.formToyota.town.focus();
				 document.getElementById('town').style.borderColor ="red";
				 document.getElementById("town").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv2").style.display = 'block';
				errormessage="           "+"Town Code should be exactly 3 characters";
				document.getElementById('error2').innerHTML=errormessage;
					
				return false;
				}
				//checking if the part number is empty 
				if (PartNumber==null || PartNumber=="")
				{
			
				document.formToyota.partNo.focus();
				 document.getElementById('partNo').style.borderColor ="red";
				 document.getElementById("partNo").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv3").style.display = 'block';
				errormessage="           "+"Please the Part Number is needed";
				document.getElementById('error3').innerHTML=errormessage;
				
				return false;
				
				}
					//checking if the Description is empty
				if (Description==null || Description=="")
				{
			
				
				document.formToyota.desc.focus();
				 document.getElementById('desc').style.borderColor ="red";
				 document.getElementById("desc").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv4").style.display = 'block';
				errormessage="           "+"Please the Description is needed";
				document.getElementById('error4').innerHTML=errormessage;
				
				return false;
				
				}
				//checking if the Price value entered is a number and greater than 0
		        if(isNaN(Price) || Price<=0){
			
				
				document.formToyota.price.focus();
				 document.getElementById('price').style.borderColor ="red";
				 document.getElementById("price").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv5").style.display = 'block';
				errormessage="           "+"Please the Price should be a number and should be greater than zero";
				document.getElementById('error5').innerHTML=errormessage;
				
			
				return false;
				}
				//checking if the quantity value entered is a number and greater than 0
				 if(isNaN(Quantity) || Quantity<=0){
			
					document.formToyota.quantity.focus();
				 document.getElementById('quantity').style.borderColor ="red";
				 document.getElementById("quantity").style.borderWidth = "3px 4px 5px 4px";
				 document.getElementById("ErrorDiv6").style.display = 'block';
				errormessage="           "+"Please the Quantity should be a number and should be greater than zero";
				document.getElementById('error6').innerHTML=errormessage;
			
				return false;
				}
                  //calculating cost
                 var Cost=Price*Quantity
                 document.formToyota.cost.value=Cost;
                 

                 //function calculating the sales tax
                 function SalesTax(Cost) {
                 	
                 	this.Cost1=Cost;
                 	
                 	if (RetailCustomer==true) 
                 		
                 {
                 	
                 if(TownCode==="KLA"){

                 var Salestax=10/100*Cost1
                 
                 }
                 else if(TownCode==="EBB" ||TownCode==="MBR"){
                 	                 	var Salestax=5/100*Cost1
                 	
                 }
                 else{
                 	var Salestax=0
                 }
             }
             else{
             	var Salestax=0
             }

              this.sales_Tax=Salestax;
             document.formToyota.sales.value=sales_Tax.toFixed(2);
             
            //return sales_Tax;
                 }
                 

             //function calculating the shipping and handling cost
             function ShippingHandling(){
             if (OverSize==true) {
             	 if(UPS==true){
             	var ship_Cost=Quantity*7.00;
             	
             }
             else if(UsPostalAir==true){
             	var ship_Cost=Quantity*8.50;
             	
             }
             else if(FedExGround==true){
				var ship_Cost=Quantity*9.25
		     
				
             }
               else if(FedExAir==true){
    	        var ship_Cost=Quantity*12.00;
    	     
             }

             var a=ship_Cost+5.00;
             }
             else{
             	 if(UPS==true){
             	var ship_Cost=Quantity*7.00;
             	
             }
             else if(UsPostalAir==true){
             	var ship_Cost=Quantity*8.50;
             	
             }
             else if(FedExGround==true){
				var ship_Cost=Quantity*9.25
		     
				
             }
               else if(FedExAir==true){
    	        var ship_Cost=Quantity*12.00;
    	     
             }
             var a=ship_Cost;
             }
             
           // output the shipping cost in html element
             this.ShippingCost=a;
             document.formToyota.shipper.value=ShippingCost;
            
             }

            
             /*calling the function sales Tax abd Shipping handling*/
             SalesTax(Cost);
             ShippingHandling();

             //calculating the total
             var Total=sales_Tax+ShippingCost+Cost
             document.formToyota.total.value= "$ " + Total.toFixed(2);
             
             //return false;

}