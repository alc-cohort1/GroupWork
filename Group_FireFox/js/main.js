
function validate(){

    // Variables for keeping input values
    var loanAmount = parseFloat(document.loanForm.loanAmount.value);
    var annualInterest = parseFloat(document.loanForm.annualInterest.value);
    var repaymentPeriod = parseFloat(document.loanForm.repaymentPeriod.value);
    var zipCode = document.loanForm.zipCode.value;
    var totalInterest = (annualInterest * loanAmount * repaymentPeriod / 100);
    var totalPayment = (loanAmount + totalInterest);
    var monthlyPayment = (totalPayment / (repaymentPeriod * 12));
}
