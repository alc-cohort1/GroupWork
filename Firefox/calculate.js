
		function calculate(){
			
		AmountOfTheLoan= parseInt(document.form1.amount_of_loan.value);
		AnnualInterest=parseInt(document.form1.annual_interest.value);
		RepaymentPeriod=parseInt(document.form1.Repayment_period.value);
		
		
		
		
		var TotalInterest=((AnnualInterest/100)*AmountOfTheLoan)*RepaymentPeriod;
		
		TotalPayment=AmountOfTheLoan+TotalInterest;

		MonthlyPayment=TotalPayment/(RepaymentPeriod*12);
		
		document.getElementById("lblTpayment").innerHTML=TotalPayment;
		document.getElementById("lblTinterest").innerHTML=TotalInterest;
		document.getElementById("lblmonthly").innerHTML=MonthlyPayment;
alert("hey"+TotalPayment);
	}
	