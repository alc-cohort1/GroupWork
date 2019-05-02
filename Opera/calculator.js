//Declare and Globalize function Variables
var loan_amount = getElementById.loan_data.loan_amount;
var annual_interest = 5;
var number_of_years = 5;
var monthly_payment = 0;
var total_payment = 0;
var total_interest = 5;

//Calculator Function to compute Interest and Other Requirements
function calculate_interest() {
  //Capture User Inputs
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

  //Display Computed Values to User
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
 }
