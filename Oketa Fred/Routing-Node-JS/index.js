//server.js
const http = require("http"),
  url = require("url"),
  makeServer = function(request, response) {
    let path = url.parse(request.url).pathname;
    console.log(path);
    if (path === "/") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Hello world");
    } else if (path === "/about") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("About page");
    } else if (path === "/blog") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(`
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <title>Registration Form | Using JavaScript </title>
       </head>
       <body>
         <center>
           <h2>Registration Form</h2>
           <!-- The Form containing labels, Input fields and the Submit Button -->
           <form id="register_form">
             <table>
               <tbody>
                 <!-- Table Row containing the Label for User Id, Input Field for User Id -->
                 <tr>
                   <td><label>User Id</label></td>
                   <td><input type="text" id="user_id" /></td>
                   <td><span id="user_id_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for Password, Input Field for Password -->
                 <tr>
                   <td><label>Password</label></td>
                   <td><input type="password" id="password" /></td>
                   <td><span id="password_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for Name, Input Field for Name -->
                 <tr>
                   <td><label>Name</label></td>
                   <td><input type="text" id="user_name" placeholder="eg. oketafred" /></td>
                   <td><span id="name_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for Address, Input Field for Address-->
                 <tr>
                   <td><label>Address</label></td>
                   <td><input type="text" /></td>
                 </tr>
                 <!-- Table Row containing the Label for Counry, Select Field for Country -->
                 <tr>
                   <td><label>Country</label></td>
                   <td>
                     <select id="country">
                       <option value="">Select a Country</option>
                       <option value="">Uganda</option>
                       <option value="">Kenya</option>
                       <option value="">Tanzania</option>
                     </select>
                   </td>
                   <td><span id="country_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for Zip Code, Input Field for Zip Code -->
                 <tr>
                   <td><label>Zip Code</label></td>
                   <td><input type="text" id="zipCode" /></td>
                   <td><span id="zipcode_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for Email, Input Field for Email -->
                 <tr>
                   <td><label>Email</label></td>
                   <td><input type="email" id="email" /></td>
                   <td><span id="email_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for Gender, Input Field for Gender -->
                 <tr>
                   <td><label>Gender</label></td>
                   <td>
                     <input type="radio" name="gender" /> Male
                     <input type="radio" name="gender" /> Female
                   </td>
                   <td><span id="gender_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for Language, Input Field for Language -->
                 <tr>
                   <td><label>Language</label></td>
                   <td>
                     <input type="checkbox" id="english" /> English
                     <input type="checkbox" id="non_english" /> Non English
                   </td>
                   <td><span id="language_error"></span></td>
                 </tr>
                 <!-- Table Row containing the Label for About, Input Field for About -->
                 <tr>
                   <td><label>About</label></td>
                   <td>
                     <textarea cols="20" rows="4"></textarea>
                   </td>
                 </tr>
                 <!-- Table Row containing the Submit Button for the form -->
                 <tr>
                   <td></td>
                   <td><button type="submit">Submit</button></td>
                 </tr>
               </tbody>
             </table>
           </form>
           <!-- The End of the form containing labels, Input fields and the Submit Button -->
         </center>
       </body>
     </html>
     `);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Error page");
    }
    response.end();
  },
  server = http.createServer(makeServer);
server.listen(3000, () => {
  console.log("Node server created at port 3000");
});
