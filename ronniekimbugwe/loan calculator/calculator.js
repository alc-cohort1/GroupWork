function calculate_interest() {
  event.preventDefault();
  var loan_amount = parseInt(document.getElementById("loan_amount").value);
  var annual_interest = document.getElementById("annual_interest").value;
  var number_of_years = document.getElementById("repayment_period").value;
  var monthly_payment = document.getElementById("monthly_payment").value;
  var total_interest = parseInt(
    document.getElementById("total_interest").value
  );
  var total_payment = document.getElementById("total_payment").value;
  var interest_rate = annual_interest / 100;
  monthly_payment = (loan_amount * interest_rate) / 12;
  total_interest = monthly_payment * 12 * number_of_years;
  total_payment = total_interest + loan_amount;
  document.getElementById(
    "monthly_payment"
  ).innerHTML = monthly_payment.toFixed(2);

  document.getElementById("total_interest").innerHTML = total_interest;

  document.getElementById("total_payment").innerHTML = total_payment;
}
