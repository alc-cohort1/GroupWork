function validate() {
  // Variables for keeping input values
  var loanAmount = parseFloat(document.loanForm.loanAmount.value);
  var annualInterest = parseFloat(document.loanForm.annualInterest.value);
  var repaymentPeriod = parseFloat(document.loanForm.repaymentPeriod.value);
  var zipCode = document.loanForm.zipCode.value;

  // Manipulation/logical operations on the input variables - this is the core of the calculator logical operations
  var monthlyInterestRate = annualInterest / (100 * 12);
  var monthlyRepaymentPeriod = repaymentPeriod * 12;
  var evaluator = Math.pow(1 + monthlyInterestRate, monthlyRepaymentPeriod);
  var monthlyPayment =
    (loanAmount * evaluator * monthlyInterestRate) / (evaluator - 1);
  var totalPayment = monthlyPayment * monthlyRepaymentPeriod;
  var totalInterest = totalPayment - loanAmount;

  // Checking that the Amount of Loan value is numeric and also not empty
  if (isNaN(loanAmount) || loanAmount == "") {
    document.getElementById("error1").innerHTML =
      "Required and must be a number";
    return false;
  } else {
    document.getElementById("error1").innerHTML = "";
  }

  // Checking that the annual interest is a number and also not empty
  if (isNaN(annualInterest) || annualInterest == "") {
    document.getElementById("error2").innerHTML =
      "Required and must be a number";
    return false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  // Checking that the repayment period is a number and also not empty
  if (isNaN(repaymentPeriod) || repaymentPeriod == "") {
    document.getElementById("error3").innerHTML =
      "Required and must be a number";
    return false;
  } else {
    document.getElementById("error3").innerHTML = "";
  }

  // Using innerHTML property to output the results into the HTML page
  document.getElementById(
    "monthlyPayment"
  ).innerHTML = `$ ${monthlyPayment.toFixed(2)}`;
  document.getElementById("totalPayment").innerHTML = `$ ${totalPayment.toFixed(
    2
  )}`;
  document.getElementById(
    "totalInterest"
  ).innerHTML = `$ ${totalInterest.toFixed(2)}`;
}
