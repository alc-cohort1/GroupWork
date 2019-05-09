<html>
<head>
<script>
function checkLength(){
    var textbox = document.getElementById("textbox");
    if(textbox.value.length <= 10 && textbox.value.length >= 5){
        alert("success");
    }
    else{
        alert("make sure the input is between 5-10 characters long")
    }
}
</script>
</head>
<body>
<input type="text" id="textbox"></input>
<input type="submit" name="textboxSubmit" onclick="checkLength()"

</body>