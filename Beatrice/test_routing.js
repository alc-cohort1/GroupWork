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
    <html>
    <head>
      <title>Registration Form</title>
    </head>
    <body>
       <center>
    <fieldset>
        <legend><h1>Registration Form</h1></legend>
        <!-- Registration form -->
        <form action="" method="post" name="form" onsubmit="return validate()">
            <table>
                <tr>
                    <th colspan="2"></th>
                </tr>
                <tr>
                    <!-- label for user id input -->
                    <td>User id:</td>
                    <td><input type="text" name="user_id" ><span id="user_id"></span></td>
                </tr>
                <tr>
                    <!-- label for password input -->
                    <td>Password:</td>
                    <td> <input type="password" name="password" ><span id="password"></span></td>
                </tr>
                <tr>
                    <!-- label for Name input -->
                    <td>Name:</td>
                    <td><input type="text" name="name" ><span id="user_name"></span></td>
                </tr>
                <tr>
                    <!-- label for Address input -->
                    <td>Address:</td>
                    <td><input type="text" name="address" ></td>
                </tr>
                <tr>
                    <!-- label for country input -->
                    <td>Country:</td>
                    <td><select name="country">
                        <option selected="" value="Default">(Please select a country)</option>
                        <option value="ug">Uganda</option>
                        <option value="tz">Tanzania</option>
                        <option value="rw">Rwanda</option>
                        <option value="ky">Kenya</option>
                        </select><span id="country"></span></td>
                    </tr>
                    <tr>
                        <!-- label for zip input -->
                        <td>ZIP Code:</td>
                        <td><input type="text" name="zip"> <span id="numloc"></span> </td>
                    </tr>
                    <tr>
                        <!-- label for email input --> 
                        <td>Email:</td>
                        <td><input type="email" name="email"><span id="email"></span></td>
                    </tr>
                    <tr>
                        <!-- label for gender input -->
                        <td>Gender:</td>
                        <td><input type="radio" name="gender">Male <input type="radio" name="gender" >Female <span id="gender"></span></td>
                                    
                    </tr>
                    <tr>  <!-- label for language input -->
                        <td>Language:</td>
                        <td><input type="checkbox" name="english" checked>English <input type="checkbox" name="non_english" id="">Non English <span id="language"></span> </td>
                    </tr>
                    <tr>
                        <!-- label for About input -->
                        <td>About:</td>
                        <td><textarea name="about" cols="30" rows="10"></textarea></td>
                    </tr>
                    <tr>
                        <td></td>
                        <!-- submit button -->
                        <td><input type="submit" value="Submit"></td>
                    </tr>
            </table>
        </form>
    </fieldset>
</center>
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
