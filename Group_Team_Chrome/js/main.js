/* JavaScript Code for Calculating The
    Monthly Payment:
    Total Payment:
    Total Interest:
*/

// Accessing the Form using the ID
let loadForm = document.querySelector("#loadForm");

// Adding the EventListener to form and is executed when the form is submitted.
loadForm.addEventListener("submit", event => {
  
  // Accessing the elements of the different input Fields using their Ids and getting their values.
  let loanAmount = document.querySelector("#loan_amount").value;
  let annualInterest = document.querySelector("#annual_interest").value;
  let repaymentPeriod = document.querySelector("#repayment_period").value;

  // Checking whether the Loan Amount, Annual Interest and Repayment period fields are empty.
  if (loanAmount == "" || annualInterest == "" || repaymentPeriod == "") {
    console.log("All Fields are required");
  } else {
  	// Checking whether the Loan Amount, Annual Interest and Repayment period are negative values.
    if (loanAmount <= 0 || annualInterest <= 0 || repaymentPeriod <= 0) {
      console.log("Enter Values greater 0");
    } else {

      // Calcluating the Monthly Interest to be paid every month.
      let monthlyInterest = annualInterest / (100 * 12);

      // Calculating the number of months within the repayment period of the Loan.
      let monthlyRepaymentPeriod = repaymentPeriod * 12;

      // Calculating x which is (1 + monthlyInterest) to the power of monthlyRepaymentPeriod.
      let x = Math.pow(1 + monthlyInterest, monthlyRepaymentPeriod);

      // Calculating the Monthly Payment.
      let monthlyPaymentAmount = (loanAmount * x * monthlyInterest) / (x - 1);


      /* Accessing the elements of the different input Fields using their Ids 
      Outputting the Monthly Payment, Total Payment and Total Interest to the FrontEnd */
      document.getElementById("monthlyPayment").value =
        "$" + monthlyPaymentAmount.toFixed(2);
      document.getElementById("totalPayment").value =
        "$" + (monthlyPaymentAmount * monthlyRepaymentPeriod).toFixed(2);
      document.getElementById("totalInterest").value =
        "$" + (monthlyPaymentAmount * monthlyRepaymentPeriod - loanAmount).toFixed(2);
    }
  }
  // Preventing the default submission behavior of the form
  event.preventDefault();
});
