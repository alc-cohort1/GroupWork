function calculate()
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
}