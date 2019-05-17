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
         <title>Form Registration</title>
     </head>
     <body>
         <form id="registerForm" onsubmit="validation(event)">
         <div class="container">
             <div class="center" style="width:50%; padding-left: 30%;padding-top: 40px">
                     <h1>Registration Form</h1>
                 <!-- Table containg the different HTML elements-->    
                <table>
                    <!--Table row containing user id input field-->
                    <tr style="height: 35px;">
                        <td style="text-align: right">
                             <label id="userId">User ID:</label>
                         </td>
                        <td style="padding-left: 10px" >
                            <input type="text" style="width: 200px "id="one">
                        </td>
                        <td>
                            <span id="idError"></span>
                        </td>
                    </tr>
                     <!--Table row containing password input field-->
                    <tr style="height: 35px;">
                         <td style="text-align: right">
                             <label>Password:</label></td>
                         <td style="padding-left: 10px" >
                             <input type="text" style="width: 200px" id="two">
                         </td>
                         <td>
                             <span id="passwordError"></span>
                         </td>
                     </tr>
                 <!--Table row containing name input field-->
                 <tr style="height: 35px;">
                     <td style="text-align: right">
                         <label id="name">Name:</label>
                     </td>
                     <td style="padding-left: 10px">
                         <input type="text" style="width: 200px" id="three">
                     </td>
                     <td>
                         <span id="nameError"></span>
                     </td>
                 </tr>
                 <!--Table row containing address input field-->
                 <tr style="height: 35px;">
                     <td style="text-align: right">
                         <label>Address:</label>
                     </td>
                     <td style="padding-left: 10px">
                         <input type="text" style="width: 200px" id="four">
                     </td>
                     <td>
                         <span id="addressError"></span>
                     </td>
                 </tr>
                 <!--Table row containing country input field-->
                 <tr style="height: 35px;">
                     <td style="text-align: right">
                         <label>Country:</label>
                     </td>
                     <td style="padding-left: 10px">
                         <select name="conutry" id="country">
                             <option value="">(Please Select Country)</option>
                             <option value="Kenya">Kenya</option>
                             <option value="Uganda">Uganda</option>
                             <option value="Tanzania">Tanzania</option>
                         </select>
                     </td>
                     <td>
                         <span id="countryError"></span>
                     </td>
                 </tr>
                 <!--Table row containing ZIP Code input field-->
                 <tr style="height: 35px;">
                     <td style="text-align: right">
                         <label id="zip">Zip Code:</label></td>
                     <td style="padding-left: 10px">
                         <input type="text" style="width: 200px" id="five">
                     </td>
                     <td>
                         <span id="zipError"></span>
                     </td>
                 </tr>
                 <!--Table row containing email input field-->
                 <tr style="height: 35px;">
                     <td style="text-align: right">
                         <label id="address">Email:</label>
                     </td>
                     <td style="padding-left: 10px;">
                         <input type="email" style="width: 200px" id="six">
                     </td>
                     <td>
                         <span id="emailError"></span>
                     </td>
                 </tr>
                 <!--Table row containing gender input field-->
                 <tr style="height: 35px;">
                     <td style="text-align: right">Sex:</td>
                     <td style="padding-left: 10px">
                         <input type="radio" name="gender" id="sex">Male
                         <input type="radio" name="gender" id="sex">Female
                     </td>
                     <td >
                         <label>
                             <span id="requiredGender"></span>
                         </label>
                     </td>
                 </tr>
                 <!--Table row containing language input field-->
                 <tr style="height: 35px;">
                         <td style="text-align: right">Language:</td>
                         <td style="padding-left: 10px">
                             <input type="checkbox" name="language1" id="language">English
                             <input type="checkbox" name="language2" id="languageNon">Non English
                         </td>
                         <td style="padding-right: 40px">
                             <label>
                                 <span id="languageError"></span>
                             </label>
                         </td>
                     </tr>               
                     <tr style="height: 35px;">
                         <td style="text-align: right">About:</td>
                         <td style="padding-left: 10px" rowspan="8" colspan="3">
                             <input type="text" style="height: 150px;width: 350px">
                         </td>
                     </tr>
                </table>
             </div>
             <div style="padding-left: 47%; padding-top: 10px">
                 <input type="submit" value="submit" style="width: 80px; height: 30px; font-size:large" >
             </div>
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