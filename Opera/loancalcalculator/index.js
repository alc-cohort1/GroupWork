function validate(){
var entry_1 = document.getElementById("loan_ammount").value;
var entry_2 = document.getElementById("annual_interest").value;
var entry_3 = document.getElementById("repayment_period").value;

//computing the mothly interest
var monthly_interest = entry1 / entry_3 *12;
document.getElementById('pgf').innerHTML=monthly_interest;


}