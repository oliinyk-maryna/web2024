// Error handling

//Finally or just the code?
function f() {
    try {
      alert('start');
      return "result";
    } catch (err) {
      /// ...
    } finally {
      alert('cleanup!');
    }
  }
  
  f(); // cleanup!

  function f() {
    try {
      alert('start');
      throw new Error("an error");
    } catch (err) {
      // ...
      if("can't handle the error") {
        throw err;
      }
  
    } finally {
      alert('cleanup!')
    }
  }
  
  f(); // cleanup!

//Inherit from SyntaxError
class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  let err = new FormatError("formatting error");
  
  alert( err.message ); // formatting error
  alert( err.name ); // FormatError
  alert( err.stack ); // stack
  
  alert( err instanceof SyntaxError ); // true