//server.js
const http = require('http'),
      url = require('url'),
 
makeServer = function (request,response){
   let path = url.parse(request.url).pathname;
   console.log(path);
   if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Hello world');
   }
   else if(path === '/about'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('About page');
   }
   else if(path === '/blog'){
     response.writeHead(200,{'Content-Type':'text/html'});
     response.write(`
     <!DOCTYPE html>
     <html lang="en">
     
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Registration Form</title>
       <script>
           <!-- 
               function validate(){
       
                   // Variables for keeping form values
                   var userId = document.regForm.userId.value;
                   var password = document.regForm.password.value;
                   var name = document.regForm.name.value;
                   var country = document.regForm.country.value;
                   var zipCode = document.regForm.zipCode.value;
                   var email = document.regForm.email.value;
                   var gender =document.regForm.gender.value;
                   var language = document.regForm;
       
                   // Ensuring the user Id is between 5 and 12 characters and is not left empty
                   if (userId.length < 5 || userId.length > 12){
                       document.getElementById('userId').innerHTML="Required and must be of length 5 to 12.";
                       return false;
                   }else{
                       document.getElementById('userId').innerHTML="";
                   }
       
                   // Checking that the password is between 7 and 12 characters and that the field isn't left empty
                   if (password.length < 7 || password.length > 12){
                       document.getElementById('password').innerHTML="Required and must be of length 7 to 12.";
                       return false;
                   }else{
                       document.getElementById('password').innerHTML="";
                   }
       
                   // Ensuring that the name field is filled with aphabetical characters only
                   if (!name.match(/^[a-zA-Z]+$/)){
                       document.getElementById('name').innerHTML="Required and alphabets only.";
                       return false;
                   }else{
                       document.getElementById('name').innerHTML="";
                   }
       
                   // Checking that the country input is not left empty
                   if (country == ""){
                       document.getElementById('country').innerHTML="Required. Must select a country.";
                       return false;
                   }else{
                       document.getElementById('country').innerHTML="";
                   }
       
                   // Prompting the user to fill in the zip code field with numerics and not leave it empty
                   if (!zipCode.match(/^[0-9]+$/)){
                       document.getElementById('zipCode').innerHTML="Required. Must be numeric only.";
                       return false;
                   }else{
                       document.getElementById('zipCode').innerHTML="";   
                   }
       
                   // Making sure the user inputs a valid email
                   if (/\S+@\S+/.test(email) == false){
                       document.getElementById('email').innerHTML="Required. Must be a valid email.";
                       return false;
                   }else{
                       document.getElementById('email').innerHTML=""
                   }
       
                   // Prompting the user to pick their gender and not leave the field empty
                   if (!gender){
                       document.getElementById('gender').innerHTML="Required.";
                       return false;
                   }else{
                       document.getElementById('gender').innerHTML="";
                   }
                   
                   // Making sure that the user picks a language or both if applicable but shouldn't leave it empty
                   if (!language.language1.checked && !language.language2.checked){
                       document.getElementById('language').innerHTML="Required.";
                       return false;   
                   }else{
                       document.getElementById('language').innerHTML=""; 
                       return true;
                   }
               }
           -->
           </script>
     </head>
     <head>
     <body>
       <!-- Form for collecting user details -->
       <form name="regForm" onsubmit="return validate()">
         <div style="width: 50%; height:500; margin-left: 29%" >
           <h1>Registration Form</h1>
           <fieldset>
     
             <!-- Input field for user Id -->
             <p>User Id: <input name="userId" type="text"> <span id="userId"></span></p>
     
             <!-- Input field for user password -->
             <p>Password: <input name="password" type="text"> <span id="password"></span></p>
     
             <!-- Input field for user name -->
             <p>Name: <input name="name" type="text"> <span id="name"></span></p>
     
             <!-- Input field for user address -->
             <p>Address: <input name="address" type="text"> <span id="address"></span></p>
     
             <!-- Input field for user country -->
             <p>Country<select name="country">
                 <option value="">(please select a Country)</option>
                 <option value="United Kingdom">United Kingdom</option>
                 <option value="United States">United States</option>
                 <option value="Uganda">Uganda</option>
               </select>
             <span id="country"></span>
             </p>
     
             <!-- Input field for user zip code -->
             <p>Zip Code: <input name="zipCode" type="text"> <span id="zipCode"></span></p>
     
             <!-- Input field for user email -->
             <p>Email: <input name="email" type="text"> <span id="email"></span></p>
     
             <!-- Input field for user gender -->
             <p>Gender: <input name="gender" type="radio" value="Male">Male<input name="gender" type="radio" value="Female">Female <span id="gender"></span></p>
     
             <!-- Input field for user langauge-->
             <p>Language: <input name="language1" type="checkbox" value="English">English<input name="language2" type="checkbox" value="Non English">Non English <span id="language"></span></p>
     
             <!-- Input field for about section -->
             <p>About: <input name="about" type="text"> <span id="about"></span></p>
     
             <!-- This is where the form is submitted on click-->
             <p><input type="submit" value="Submit"></p>
           </fieldset>
         </div>
       </form>
     </body>
     </html>      
      `);
 }
   else{
     response.writeHead(404,{'Content-Type':'text/plain'});
     response.write('Error page');
   }
   response.end();
 },
server = http.createServer(makeServer);
server.listen(3000,()=>{
 console.log('Node server created at port 3000');
});
