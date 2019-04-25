var borrowed_amount = 0;
var interest = null;
var interest_rate = interest / 100;
var number_of_years = 0;
var monthlypayment = 0;
var totalpayment = 0;
var totalinterest = 0;
//intialisation
function calculate_interest() {
  var borrowed_amount = document.myform.borrowed_amount.value;
  var interest = document.myform.interest.value;
  var interest_rate = document.myform.interest_rate.value;
  var number_of_years = document.myform.number_of_years.value;
  monthlypayment = (borrowed_amount * interest_rate) / 12; // monthly payment
  totalpayment = borrowed_amount + monthlypayment * 60; // total payment for 5 years
  totalinterest = monthlypayment * 60; //total interest of the 5 years
  //please use the monthlypayment,totalpayment,totalinterest as the span ids
}
