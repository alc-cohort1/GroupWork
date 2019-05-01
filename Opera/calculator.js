//intialisation of variable first to 0
var loan_amount = getElementById.loan_data.loan_amount;
var annual_interest = 5;

var number_of_years = 5;
var monthly_payment = 0;
var total_payment = 0;
var total_interest = 5;

function calculate_interest() {
  var loan_amount = document.getElementById("loan_amount").value;
  var annual_interest = document.getElementById("annual_interest").value;
  var number_of_years = document.getElementById("repayment_period").value;
  alert(
    "yello " + loan_amount + "  " + annual_interest + "  " + number_of_years
  );
  var interest_rate = annual_interest / 100;
  monthly_payment = (loan_amount * interest_rate) / 12;
  total_interest = monthly_payment * 12 * number_of_years;
  total_payment = total_interest + loan_amount;

  // alert("hello !" + monthly_payment);
  //alert("hello !" + monthly_payment);

  document.getElementById("total_interest").innerHTML = total_interest;

  document.getElementById("total_payment").innerHTML = total_payment;

  alert(
    "monthly payment is " +
      monthly_payment +
      " " +
      "Total Interest is " +
      total_interest +
      " total payment is " +
      total_payment
  );

  // monthly_payment = (loan_amount*interest_rate

  /////////////////////////
  //var loan_amount = document.loan_data.loan_amount.value;
  // var annual_interest = document.loan_data.annual_interest.value;

  //var repayment_period = document.loan_data.repayment_period.value;
  //repayment_period;

  //  monthly_payment = (loan_amount * interest_rate) / 12;

  //alert("value   " + monthly_payment);
  //total_payment = repayment_period + monthlypayment * 60;
  //alert("value   " + total_payment);
  //total_interest = monthlypayment * 60;
  //monthly_payment = document.getElementById("monthly_payment").innerHTML;
  //total_payment = document.getElementById("total_payment").innerHTML;
  //total_interest = document.getElementById("total_interest").innerHTML;
  //Event.preventDefault();
}
// monthly payment
// total payment for 5 years
//total interest of the 5 years
