//server.js

//calling the package/module express
const express = require('express'),
	  server = express();

//process.env.port is a function in nodejs express, server.set is a method in express
server.set('port', process.env.PORT || 3000);

//Basic routes 
server.get('/',(request,response)=>{
	response.send(`


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My JS Assignment</title>
</head>
<body>
  

  <center><h1>Registration Form</h1></center>
<!-- A Form containing labels, Input fields and the Submit Button -->
  <center><form method="POST" action="" name="myjsform" id="myjsform">
    
<!-- The label containing UserID Input fields -->
    <p>
      <label for="userid">Userid:</label>
      <input id="userid" name="userid" type="text">
      <span id="userid_error"></span>
    </p>
<!-- The label containing Password Input fields -->
    <p>
      <label for="password" ="Password">Password:</label>
      <input id="password" name="password" type="password">
      <span id="password_error"></span>
    </p>
<!-- The label containing Name Input fields -->
    <p>
      <label for="name">Name:</label>
      <input id="name" name="name" type="text">
      <span id="name_error"></span>
    </p>
<!-- The label containing Address Input fields -->      
    <p>
      <label for="address">Address:</label>
      <input id="address" name="address" type="text">
      <span id="address_error"></span>
    </p>
<!-- The label containing Select fields for Country -->
    <p>
      Country:<select value=""  id="country"> 
        <option value="">Select Your Country</option>
        <option value="KE">Kenya</option>
        <option value="TZ">Tanzania</option>
        <option value="BU">Burundi</option>
        <option value="RW">Rwanda</option>
        <option value="ZM">Zambia</option>
      </select>
      <span id="country_error"></span>
    </p>
<!-- The label containing Input for Zip Code fields -->
    <p>
      <label for="zip">Zip Code:</label>
      <input id="zip" name="zip" type="">
      <span id="zip_error"></span>
    </p>
<!-- The label containing Email Input fields -->
    <p>
      <label for="mail">Email:</label>
      <input id="mail" name="mail" type="email">
      <span id="mail"></span>
    </p>
<!-- The label containing  Input fields for Gender -->
    <p>
      <label for="sex">Sex:</label>
      <input type="radio" name="gender">Male
      <input type="radio" name="gender">Female
      <span id="sex_error"></span>
    </p>
<!-- The label containing Input fields for Language Options -->
    <p>
      <label for="language">Language:</label>
      <input type="checkbox" id="english">English
      <input type="checkbox" id="non_english">Non-English
      <span id="language_error"></span>
    </p>
<!-- The label containing About Input field -->
    <p>
      <label for="about">About:</label>
      <textarea id="about" name="about" rows="4" cols="20"> </textarea>
      <span id="about_error"></span>
    </p>
<!-- The label containing the submit button for the form-->
    <p>
      <label for="submit"></label>
      <input type="submit" onclick="validate()"  value="Submit"> 
    </ul>
  </form></center>
<!-- End of the form containing labels, Input fields and the Submit Button -->

</body>
</p>
</form>
</center>
</body>
</html>
		`);
});

server.get('/about',(request,response)=>{
	response.send('About Page');
});

//Express error handling middleware
server.use((request,response)=>{
	response.type('text/html');
	response.status(505);
	response.send('Error page');
});

//Binding to a port
server.listen(3000,()=>{
console.log('Express server started at port 3000');
});