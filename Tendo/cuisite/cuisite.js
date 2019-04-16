function validate(){
    var idNum=document.regform.id.value;//id field Tag
    var nm=document.regform.name.value;//Name tag 
    var psswd=document.regform.password.value;//password tag
    var addss=document.regform.address.value;
    var cnt=document.regform.country.value;
    var zp=document.regform.zip.value;
    var email=document.regform.email.value;
    var male=document.regform.male.value;
    var fmale=document.regform.female.value;
    var eng=document.regform.lang_en.value;
    var non_engl=document.regform.non_en.value;
    var textarea=document.regform.txtarea.value;
if(isNaN(idNum) || idNum=="" || (5<=idNum.toString().length<=12)){
document.getElementById('spn1').innerHTML="<font color='red'>Required and must be of length 5 to 12 ";
return false;
}
if((psswd!="" ) ||(7<=psswd.toString().length<=12)){
    document.getElementById('spn2').innerHTML="<font color='red'>Required and must be of length 7 to 12 ";
    return false;
    }
        
       if((nm!="" ) ||(7<=nm.length<=12)){
        document.getElementById('spn3').innerHTML="<font color='red'>Required and must be of length 7 to 12 ";
        return false;
        }
            if((addss!="" ) ||(7<=aspn1ddss.length<=12)){
                document.getElementById('spn4').innerHTML="<font color='red'>Optional";
                return false;
                }

                if(cnt!="" ){
                    document.getElementById('spn4').innerHTML="<font color='red'>Required.Must selecta Country";
                    return false;
                    }

                if((zp!="" ) ||(7<=zp)(7<=zp.length<=12)){
                    document.getElementById('spn5').innerHTML="<font color='red'>Required. Must be numeric only ";
                    return false;
                    }

                    if((email!="" ) ||(7<=email.length<=12)){
                        document.getElementById('spn6').innerHTML="<font color='red'>Required. Must be a valid Email ";
                        return false;
                        }
        
                        if((male!="" ) ||(7<=male.length<=12)){
                            document.getElementById('spn7').innerHTML="<font color='red'>Required.";
                            return false;
                            }  


                        if((textarea!="" )){
                            document.getElementById('spn8').innerHTML="<font color='red'>Optional. ";
                            return false;
                            }  
                            else{
                return true;
            }

}


    
