//server.js
const http = require("http"),
  url = require("url"),
  makeServer = function(request, response) {
    let path = url.parse(request.url).pathname;
    console.log(path);
    if (path === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("Hello world");
    } else if (path === "/about") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("About page");
    } else if (path === "/form") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Registration Form</title>
      </head>
      <body>
          <center>
              <h1>I have got 95% in this Assignment</h1>
              <fieldset>
                  <legend><h2><i></i><b>Julius's Individual ClassWork</b></i></h2></legend>
                  <h1>Registration Form</h1>
                  
                      <!-- Form name and declaration of onsubmit event -->
                      <form name="regForm" onsubmit="return validate()" method="post" action="index.html">
                          <table>
      
                              <!-- User ID field -->
                              <tr>
                                  <td>
                                      <label>User Id: </label>
                                  </td>
                                  <td>
                                      <input name="userId">
                                      <span id="error1"></span>
                                  </td>
                              </tr>
      
                              <!-- Password Field -->
                              <tr>
                                  <td>
                                      <label>Password: </label>
                                  </td>
                                  <td>
                                      <input name="password">
                                      <span id="error2"></span>
                                  </td>
                              </tr>
      
                              <!-- Name Field -->
                              <tr>
                                  <td>
                                      <label>Name: </label>
                                  </td>
                                  <td>
                                      <input name="name">
                                      <span id="error3"></span>
                                  </td>
                              </tr>
      
                              <!-- Address field -->
                              <tr>
                                  <td>
                                      <label>Address:</label>
                                  </td>
                                  <td>
                                      <input type="text" name="address">
                                  </td>
                              </tr>
      
                              <!-- Country Field -->
                              <tr>
                                  <td>
                                      <label>Country:</label>
                                  </td>
                                  <td>
                                      <select name="country"> 
                                          <option value="">(Please seelct a country)</option>
                                          <option value="Kenya">Kenya</option>
                                          <option value="Tanzania">Tanzania</option>
                                          <option value="Rwanda">Rwanda</option>
                                          <option value="Uganda">Uganda</option>
                                      </select>
                                      <span id="error4"></span>
                                  </td>
                              </tr>
      
                              <!-- Zip Code Field -->
                              <tr>
                                  <td>
                                      <label>Zip Code:</label>
                                  </td>
                                  <td>
                                      <input name="zipCode">
                                      <span id="error5"></span>
                                  </td>
                              </tr>
      
                              <!-- Email Field -->
                              <tr>
                                  <td>
                                      <label>Email:</label>
                                  </td>
                                  <td>
                                      <input name="email">
                                      <span id="error6"></span>
                                  </td>
                              </tr>
      
                              <!-- Sex Field -->
                              <tr>
                                  <td>
                                      <label>Gender:</label>
                                  </td>
                                  <td>
                                      <input type="radio" name="sex" value="Male">Male
                                      <input type="radio" name="sex" value="Female">Female
                                      <span id="error7"></span>
                                  </td>
                              </tr>
      
                              <!-- Language Field -->
                              <tr>
                                  <td>
                                      <label>Language:</label>
                                  </td>
                                  <td>
                                      <input type="checkbox" name="checkbox1" value="English" checked>English
                                      <input type="checkbox" name="checkbox2" value="Non English">Non English
                                      <span id="error8"></span>
                                  </td>
                              </tr>
      
                              <!-- About Field -->
                              <tr>
                                  <td>
                                      <label>About:</label>
                                  </td>
                                  <td>
                                      <textarea cols="30" rows="10"></textarea>
                                  </td>
                              </tr>
      
                              <!-- The submit Button Field-->
                              <tr>
                                  <td colspan="2" align="center">
                                      <input type="submit" value="Submit"
                                      />
                                  </td>
                              </tr>
                          </table>
                      </form>
              </fieldset>
          </center>
      </body>
      </html>`);
    } else {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("Error Page");
    }
    response.end();
  },
  server = http.createServer(makeServer);
server.listen(3000, () => {
  console.log("Node server created at port 3000");
});
