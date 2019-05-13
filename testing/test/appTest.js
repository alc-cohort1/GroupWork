/*This can alo be used which comes with NodeJS
const assert = require("assert");
or you can use chai as an assertion library
*/

const assert = require("chai").assert;
const app = require("../app");

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

// performing our test on the entire App
describe("App", function() {
  // this stores tests for sayHello()
  describe("sayHello", function() {
    it("the returned value is not not hello", function() {
      assert.notEqual(sayHelloResult, "hello");
    });

    it("sayHello should return type string", function() {
      assert.typeOf(sayHelloResult, "string");
    });
  });

  // // tests for the addNumbers()
  // describe("addNumbers", function() {
  //   it("Numbers should be above 5", function() {
  //     assert.isAbove(addNumbersResult, 5);
  //   });

  //   it("addNumbers should return type number", function() {
  //     assert.typeOf(addNumbersResult, "number");
  //   });
  // });
});
