function validate(){
    var zipcode = document.getElementById("zipcode").value;
    if(zipcode !="number"){
        alert("use a number");
        return null;
    }
    var userid= document.getElementById("userid").value;
    if(userid !="aphabetes"){
        alert("user letters");
        return null;
    }
    document.write(typeof(24.49));
}
