
				function calculate(){

//getting vaues entered in the form

		AmountOfTheLoan= document.form1.amount_of_loan.value;
		AnnualInterest=document.form1.annual_interest.value;
		RepaymentPeriod=document.form1.Repayment_period.value;
		
//checking if nothing is entered
		if(AmountOfTheLoan==""){
			document.getElementById("lblloan").innerHTML="please enter the amount of loan";
              
			   return false;

		}
		else if(AnnualInterest==""){
			document.getElementById("lblinterest").innerHTML="please enter the annual interst";
               return false;
		}
		else if(RepaymentPeriod==""){
			document.getElementById("lblRperiod").innerHTML="please enter the repayment period";
			
               return false;
		}
		else{

//checking if values entered are numbers
			if(isNaN(AmountOfTheLoan)){
				document.getElementById("lblloan").innerHTML="Amount must be a number";
				              return false;
			}
			else if(isNaN(AnnualInterest)){
				document.getElementById("lblinterest").innerHTML="interst Rate must be a number";
				
              return false;
			}
			else if (isNaN(RepaymentPeriod)) {
				document.getElementById("lblRperiod").innerHTML="RP must be a number";
				
              return false;
			}
			
			else{

//changing value strings to integers
			A_Loan= parseInt(AmountOfTheLoan);
		A_Interest=parseInt(AnnualInterest);
		R_Period=parseInt(RepaymentPeriod);

//calculating interest
		var TotalInterest=((A_Interest/100)*A_Loan)*R_Period;
		
//calculating total payment of the loan
		TotalPayment=A_Loan+TotalInterest;

//calculating monthly payments
		MonthlyPayment=(TotalPayment/(R_Period*12));
		
		mp=MonthlyPayment.toString();

		X= parseFloat(mp);
		
//outputing the result
		document.getElementById("lblTpayment").innerHTML=TotalPayment;
		document.getElementById("lblTinterest").innerHTML=TotalInterest;
		document.getElementById("lblmonthly").innerHTML=X;

return false;
			}

		}
		
		
	}
	