     /*An event listener to triggure users inputs*/

     document.getElementById("myForm").addEventListener('submit', function (e) {
        e.preventDefault();

        /*variables holding captured id values*/

        var amountOfLoan = document.getElementById("amout").value;
        var annualInterest = document.getElementById("annualInt").value;
        var repaymentPeriod = document.getElementById("repayment").value;

        /*
        monthlypayment = (LoanAmount * DiscountFactor * MonthlyInterest )/ (DiscountFactor - 1)
        DiscountFactor = {(1+MonthlyInterest)^ RepaymentperiodInMonths}*/
        var annualInt = (annualInterest / 100);
        var monthlyInterest = (annualInt / 12);
        var repaymentPeriodMonths = (repaymentPeriod * 12);

        /**calculate the Discount Factor*/

        var discountFactor = Math.pow(1 + monthlyInterest, repaymentPeriodMonths);
        var amountPayableMonth = ((amountOfLoan * discountFactor * monthlyInterest) / (discountFactor - 1));

        document.getElementById("monthPayment").innerHTML = amountPayableMonth.toFixed(3);
        document.getElementById("total_amount_payable").innerHTML = (repaymentPeriodMonths * amountPayableMonth).toFixed(3);
        document.getElementById("total_interest").innerHTML = (amountOfLoan * annualInt).toFixed(3);
        });