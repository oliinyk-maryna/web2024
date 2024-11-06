//Recursion and stack
   //Sum all numbers till the given one

   function sumTo(n) {
     let sum = 0;
     for (let i = 1; i <= n; i++) {
       sum += i;
     }
     return sum;
   }
   
   alert( sumTo(100) );

   function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  alert( sumTo(100) );

  function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
  alert( sumTo(100) );
   
   //Calculate factorial
   function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(5) ); // 120
  
   //Fibonacci numbers
   function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
   //Output a single-linked list
   let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    alert(list.value); // output the current item
  
    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }
  
  }
  
  printList(list);

   //Output a single-linked list in the reverse order
   let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }
  
  printReverseList(list);

  //Variable scope, closure
     //Does a function pickup latest changes?
     let name = "John";

     function sayHi() {
       alert("Hi, " + name);
     }
     
     name = "Pete";
     
     sayHi(); // what will it show: "John" or "Pete"? Pete

     //Which variables are available?
     function makeWorker() {
      let name = "Pete";
    
      return function() {
        alert(name);
      };
    }
    
    let name = "John";
    
    // create a function
    let work = makeWorker();
    
    // call it
    work(); // what will it show? Pete

     //Are counters independent?
     function makeCounter() {
      let count = 0;
    
      return function() {
        return count++;
      };
    }
    
    let counter = makeCounter();
    let counter2 = makeCounter();
    
    alert( counter() ); // 0
    alert( counter() ); // 1
    
    alert( counter2() ); // 0
    alert( counter2() ); // 1

     //Counter object
     function Counter() {
      let count = 0;
    
      this.up = function() {
        return ++count;
      };
    
      this.down = function() {
        return --count;
      };
    }
    
    let counter = new Counter();
    
    alert( counter.up() ); // 1
    alert( counter.up() ); // 2
    alert( counter.down() ); // 1

     //Function in if
     let phrase = "Hello";

     if (true) {
       let user = "John";
     
       function sayHi() {
         alert(`${phrase}, ${user}`);
       }
     }
     
     sayHi(); //The result is an error.

     //Sum with closures
     function sum(a) {

      return function(b) {
        return a + b; // takes "a" from the outer lexical environment
      };
    
    }
    
    alert( sum(1)(2) ); // 3
    alert( sum(5)(-1) ); // 4

     //Is variable visible?
     let x = 1;

     function func() {
       console.log(x); // ReferenceError: Cannot access 'x' before initialization
       let x = 2;
     }
     
     func(); //result: error
     
     //Filter through function
     function inArray(arr) {
      return function(x) {
        return arr.includes(x);
      };
    }
    
    let arr = [1, 2, 3, 4, 5, 6, 7];
    alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

     //Sort by field
     function byField(fieldName){
      return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }

     //Army of functions
     function makeArmy() {

      let shooters = [];
    
      for(let i = 0; i < 10; i++) {
        let shooter = function() { // shooter function
          alert( i ); // should show its number
        };
        shooters.push(shooter);
      }
    
      return shooters;
    }
    
    let army = makeArmy();
    
    army[0](); // 0
    army[5](); // 5

//Function object, NFE
    //Set and decrease for counter
    function makeCounter() {
      let count = 0;
    
      function counter() {
        return count++;
      }
    
      counter.set = value => count = value;
    
      counter.decrease = () => count--;
    
      return counter;
    }
  
    //Sum with an arbitrary amount of brackets
    function sum(a) {

      let currentSum = a;
    
      function f(b) {
        currentSum += b;
        return f;
      }
    
      f.toString = function() {
        return currentSum;
      };
    
      return f;
    }
    
//Scheduling: setTimeout and setInterval
    //setInterval
    function printNumbers(from, to) {
      let current = from;
    
      let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
          clearInterval(timerId);
        }
        current++;
      }, 1000);
    }
    
    // usage:
    printNumbers(5, 10);

    //setTimeout
    function printNumbers(from, to) {
      let current = from;
    
      setTimeout(function go() {
        alert(current);
        if (current < to) {
          setTimeout(go, 1000);
        }
        current++;
      }, 1000);
    }
    
    // usage:
    printNumbers(5, 10);

    //Any setTimeout will run only after the current code has finished.The i will be the last one: 100000000.
    let i = 0;
    setTimeout(() => alert(i), 100); // 100000000
    
    // assume that the time to execute this function is >100ms
    for(let j = 0; j < 100000000; j++) {
      i++;
    }
    
//Decorators and forwarding, call/apply
   //Spy decorator
   function spy(func) {

    function wrapper(...args) {
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }

//Delaying decorator
function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms

function delay(f, ms) {

  return function(...args) {
    let savedThis = this; // store this into an intermediate variable
    setTimeout(function() {
      f.apply(savedThis, args); // use it here
    }, ms);
  };

}

//Debounce decorator
function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

//Throttle decorator
function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// outputs 3, intermediate value 2 was ignored


//Function binding
//Bound function as a method
function f() {
  alert( this ); // null
}

let user = {
  g: f.bind(null)
};

user.g();

//Second bind
function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Pete"} );

f(); // John

//Function property after bind
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); // The answer: undefined.

//The result of bind is another object. It does not have the test property.


//Fix a function that loses "this"
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk(), () => user.loginFail());


//Partial application for login
askPassword(() => user.login(true), () => user.login(false));
//or
askPassword(user.login.bind(user, true), user.login.bind(user, false));