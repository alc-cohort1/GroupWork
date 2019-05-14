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
     response.writeHead(200,{'Content-Type':'text/html'});
     response.write(`
<htm>
  <head>
    <title>Registration Form</title>
    <style >
/*styling the appearance of the input fields>*/
      .form input[type=text] {
        
        border: 1px solid #795f79;
        border-radius: 5px;
        width: 100%;
        height: 30px;
                color: #254117;
                font-family:Georgia, 'Times New Roman', Times, serif;
                font-weight: 1000;
                font-size:16px;

        
      }
/* styling the appearance of the form button*/
      .form button {
        border-radius: 5px;
        border: 1px solid #AAA;
        width: 100%;
        
          /* Size and position */
          width: 100%;
                  padding: 8px 5px;
              background: #ff00ff;
              color: snow;
          font-family: Georgia;
          font-size: 24px;
          font-weight: 200px;
          border: none;
    
 
      }
/*appearance of the button on mause hover*/
      .form button:hover{
        background-color: green;
        color: yellow
      }
/*appearance of the button when clicked*/
      .form button:active {
               background-color: #3e8e41;
               box-shadow: 0 5px #666;
               
/*styling the appearance of the form labels*/ 
      .form label{font-size: 20; color: #151B54;}
      input[type=text]:focus{border:3px solid rgb(133, 186, 235);}
      select:focus{border:1px solid #555;}
      textarea.focus{border:4px solid #555;}
      ::-moz-placeholder{
        color: red;
        font-size: 13
      }

      
}
    </style>
  </head>
   
  <body background="bg.jpg" >

   
<!--centering the form-->
    <center>
      <fieldset background="b.jpg" style="width: 700px;padding-left: 0%; border: 4px solid #ff00ff; border-radius: 15px;"><legend><h1 style="color:indigo"> Registration Form</h1></legend>
        <form class="form" name="formreg" onsubmit="return validate()" >  
          <table width=90%;>

            <tr><td><label>User Id:</label></td><td><input type="text" name="userid" min="100" max="300" autofocus></td><td></td></tr>
<!--display error if wrong user id is entered-->
            <tr><td></td><td><span id="error_label" style="color:red"></span></td></tr>
            <tr><td><label>Password:</label></td><td><input type="text" name="pass_word" ></td></tr>
                     <tr><td></td><td><span id="error_password" style="color:red"></span></td></tr>
<!--display error if wrong password is entered-->
            <tr><td><label>Name:</label></td><td><input type="text" name="name" ></td></tr>
<!--display error if wrong name withnumbers is entered-->
                     <tr><td></td><td><span id="error_name" style="color:red"></span></td></tr>
            <tr><td><label>Address:</label></td><td>  <input type="text" name="address" placeholder="Optional" ><span id="demoaddress" style="color:red"></span></td></tr>
            <tr><td><label>Country:</label></td><td><select style="border:none;background-color:#f1f1f1;width:100%;
        border-radius:5px; height: 30px; color: #254117; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 16;" name="Country">
                  <option>Select your Country</option>
                <option>Uganda</option>
                <option>Kenya</option>
                    <option>Tanzania</option>
                <option>South Sudan</option>
                  <option>Egypt</option>
                <option>US</option>
                <option>UK</option>
                <option>Somalia</option>
                <option>DRC</option>
                <option>Malawi</option>
                <option>South Africa</option>  </select></td></tr>
<!--display error if no country is selected-->
                    <tr><td></td><td><span id="error_country" style="color:red"></span></td></tr>
            <tr><td><label> Zip Code:</label></td><td><input type="text" name="zip_code" ></td></tr>
             <tr><td></td><td><span id="error_zipcode" style="color:red"></span></td></tr>
            <tr><td><label>Email:</label> </td><td><input type="text" name="email"></td></tr>
<!--display error if wrong email is entered-->
             <tr><td></td><td><span id="error_email" style="color:red"></span></td></tr>
            <tr><td>  <label>Sex:</label><td><input type="radio" name="gender" id="male"><label>Male</label><input type="radio" name="gender" id="female"><label>Female</label><span id="error_gender" style="color:red"></span></td></tr>
        
            <tr><td><label> Language</label></td><td>
              <input type="checkbox" name="lang" id="english" checked><label>English</label>
              <input type="checkbox" name="lang" id="nonenglish"><label>Non English</label><span id="error_language" style="color:red"></span>
      </td></tr>
            <tr><td><label>About:</label> </td><td><textarea style="border:2px solid #ccc;width:100%; border-radius:5px; background-color:#f8f8f8; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 16px; font-weight: 30; color:254117;" placeholder="Optional"></textarea></td></tr>
            <tr><td colspan="2" align="center"> <button value="submit">Submit</button>  </td></tr>

          </table>
      
        </fieldset>
      </center>
  
    </form>
  </body>
  </html>
      `);
   }
   else if(path === '/blog'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('Blog page');
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