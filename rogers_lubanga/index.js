/*function hello(){
    alert("welcome to js")
}
  function add(x,y){//
  
      var z = x + y;
      return z;//


  }
  var t = add(10, 4);
  var input = document.getElementById("input_name");
		function validate(){
				 var x = document.my_form
				 txt =x.input.value
				 if (txt >= 1 && txt <= 5) {

				 return true

				 }else{
				 	alert("must be between 1 and 5")
				 	return false
				 }
		

        }
        */
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