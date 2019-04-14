
function validate(){

    // Variables for keeping input values
    var loanAmount = parseFloat(document.loanForm.loanAmount.value);
    var annualInterest = parseFloat(document.loanForm.annualInterest.value);
    var repaymentPeriod = parseFloat(document.loanForm.repaymentPeriod.value);
    var zipCode = document.loanForm.zipCode.value;
    var totalInterest = (annualInterest * loanAmount * repaymentPeriod / 100);
    var totalPayment = (loanAmount + totalInterest);
    var monthlyPayment = (totalPayment / (repaymentPeriod * 12));

    

    // Checking that the Amount of Loan value is numeric and also not empty
    if (isNaN(loanAmount) || loanAmount == ""){
        document.getElementById('error1').innerHTML = "Required and must be a number";
        return false;
    }else{
        document.getElementById('error1').innerHTML = "";
    }

    // Checking that the annual interest is a number and also not empty
    if (isNaN(annualInterest) || annualInterest == ""){
        document.getElementById('error2').innerHTML = "Required and must be a number";
        return false;
    }else{
        document.getElementById('error2').innerHTML = "";
    }

    // Checking that the repayment period is a number and also not empty
    if (isNaN(repaymentPeriod) || repaymentPeriod == ""){
        document.getElementById('error3').innerHTML = "Required and must be a number";
        return false;
    }else{
        document.getElementById('error3').innerHTML = "";
    }

    document.getElementById('monthlyPayment').innerHTML = `$ ${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').innerHTML = `$ ${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').innerHTML = `$ ${totalInterest.toFixed(2)}`;
}
