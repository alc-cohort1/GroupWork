    
       function validate(){
          
        var x = document.getElementById("input1")
        if(x.value.length <= 12 && x.value.length >=5 ){
            alert("success")

        }else{
            alert("enter value betweek 5 and 12")
        }

    var input2 = document.getElementById("input2")
    if(input2.value.length <= 12 && input2.value.length >= 7){
        alert("Success")



    }else{
        alert('enter value between 7 and 12')
    }
        
       }