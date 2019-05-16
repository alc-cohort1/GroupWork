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
     <html lang="en">
<head>
    <title>peter</title>
</head>
<body>
 <form>
       
<center><fieldset>
        <h1>Regestration form</h1>
     <table>
         <tr> 
             <td><label> user id:</label></td>
             <td><input type="text" name="user id" minlength="5" maxlength="12" required></td>
             
         </tr>
         <tr>
                <td><label> password:</label> </td>
                <td><input type="password" name="password" minlength="7" maxlength="12" required></td>
         </tr>
         <tr>
                <td><label> Name:</label></td>
                <td><input type="alphabates" name="name"required></td>
         </tr>
         <tr>
                <td><label> Address:</label></td>
                <td><input type="text" name="Address" optional></td>
         </tr>
         <tr>
                <td><label>  country:</label></td>
                <td><select name="country" id="country" required>
                        <option>Uganda</option> 
                        <option>kenya</option>
                        <option>Tazania</option>
                        <option>Rwanda</option>
                        <option>USA</option>
                        <option>CHINA</option>
                     </select></td>
         </tr>
         <tr>
                <td><label> Zip code:</label> </td>
                <td><input type="number" name="number" required></td>
         </tr>
         <tr>
                <td><label> email:</label> </td>
                <td><input type="email" name="email" required></td>
         </tr><tr>
                <td><label> SEX:</label> </td>
                <td><input type="radio" name="gender" value="male" checked> Male
                    <input type="radio" name="gender" value="female"> Female</td>
         </tr>
         <tr>
                <td><label> Laguage:</label> </td>
                <td><input type="checkbox" name="English" value="English" checked> English
                    <input type="checkbox" name=" non English" value=" non English" > non English</td>
         </tr>
         <tr>
                <td><label>About</label> </td>  
                <td>
                        <textarea name="message" rows="10" cols="30">
                            </textarea></td> 
         </tr>

     </table>
                    <input type="button" value="submite" onclick="hello()"> 
 </fieldset> 
</center> 
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
