function calculate(event)
{
    // Create variable and assign it the amount of money loaned.
    var loan_amount = document.getElementById("loan_amount").value;
    // Create a variable and assign it the annual interest rate.
    var annual_interest = document.getElementById("annual_interest").value;
    // Create a variable and assign it the period in which the loan should be paid back.
    var repayment_period = document.getElementById("repayment_period").value;
    

    // Calcluate interest to be paid every month from the interest that is to be paid annually.
    var monthly_interest = annual_interest / 100 / 12;
    // Calculate the number of months within the repayment period by multiplying the value by 12 months.
    var monthly_repayment_period = repayment_period * 12;


    // // Now compute the monthly payment figure, using esoteric math.
    // Variable "x" contains the monthly interest raised to the power of the monthly repayment period.
    // This means "x" is a variable that shall be used to calculate the monthly payments.
    var x = Math.pow (1 + monthly_interest, monthly_repayment_period);
    // Variable "monthly" shall then calculate the amount of money to paid each month.
    // It is calculated by multiplying the amount loaned by the monthly interest rate and the variable "x".
    // The product is then divided by (x-1), with "x" being calculated above. 
    var monthly = (loan_amount * x * monthly_interest) / (x-1);
    
    
        
    // Checking if the result "monthly" obtained from previous section is either a positive or a negative finite number
    
    if (!isNaN(monthly) && (monthly != Number.POSITIVE_INFINITY) && (monthly != Number.NEGATIVE_INFINITY)) {

      /*accessing the input values of the various input fields by using their respective ids (this input fields include; the input fields of Monthly Payment
      Total Payment and Total Interest )*/
      /*
      the values are then calculated using the results obtained from the previous sections and displayed into two decimal places.
      A dollar signed is also added on the result that will be displayed
      */
        
        document.getElementById("monthly_payment").value =  ("$"+(monthly).toFixed(2));
        document.getElementById("total_payment").value = ("$"+(monthly * monthly_repayment_period).toFixed(2));
        document.getElementById("total_interest").value = ("$"+((monthly * monthly_repayment_period) - loan_amount).toFixed(2));
    }

    /* Checking if the result "monthly" obtained from previous line is either a positive or a negative finite number. if the value is
    obtained is not a finite number. then nothing will be displayed in these respective fields (the input fields of Monthly Payment
      Total Payment and Total Interest)*/
    
    else {
        document.getElementById("monthly_payment").value = "";
        document.getElementById("total_payment").value = "";
        document.getElementById("total_interest").value = "";
    }
    event.preventDefault();
}
