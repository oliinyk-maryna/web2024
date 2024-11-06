//F.prototype
   //Working with prototype
   let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // true, taken from rabbit.
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // null, taken from animal.
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // undefined, there’s no such property any more.
   //Searching algorithm
   let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  alert( pockets.pen ); // 3
  alert( bed.glasses ); // 1
  alert( table.money ); // undefined

   //Where does it write?
   let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat(); //answer: rabbit

   //Why are both hamsters full?
   let hamster = {
    stomach: [],
  
    eat(food) {
      // assign to this.stomach instead of this.stomach.push
      this.stomach = [food];
    }
  };
  
  let speedy = {
     __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  alert( lazy.stomach ); // <nothing>

//F.prototype
   //Changing "prototype"
   function Rabbit() {}
   Rabbit.prototype = {
     eats: true
   };
   
   let rabbit = new Rabbit();
   
   Rabbit.prototype = {};
   
   alert( rabbit.eats ); // true
   
   function Rabbit() {}
   Rabbit.prototype = {
     eats: true
   };
   
   let rabbit = new Rabbit();
   
   Rabbit.prototype.eats = false;
   
   alert( rabbit.eats ); // false
   
   function Rabbit() {}
   Rabbit.prototype = {
     eats: true
   };
   
   let rabbit = new Rabbit();
   
   delete rabbit.eats;
   
   alert( rabbit.eats ); // true
   
   function Rabbit() {}
   Rabbit.prototype = {
     eats: true
   };
   
   let rabbit = new Rabbit();
   
   delete Rabbit.prototype.eats;
   
   alert( rabbit.eats ); // undefined


   //Create an object with the same constructor
   function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name ); // Pete (worked!)

  function User(name) {
    this.name = name;
  }
  User.prototype = {}; // (*)
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name ); // undefined
     
//Native prototypes

   //Add method "f.defer(ms)" to functions
   Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    alert("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 sec

   //Add the decorating "defer()" to functions
   Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    alert( a + b );
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 sec

  //Prototype methods, objects without __proto__

     //Add toString to the dictionary
     let dictionary = Object.create(null, {
      toString: { // define toString property
        value() { // the value is a function
          return Object.keys(this).join();
        }
      }
    });
    
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test";
    
    // apple and __proto__ is in the loop
    for(let key in dictionary) {
      alert(key); // "apple", then "__proto__"
    }
    
    // comma-separated list of properties by toString
    alert(dictionary); // "apple,__proto__"

     //The difference between calls
     function Rabbit(name) {
      this.name = name;
    }
    Rabbit.prototype.sayHi = function() {
      alert( this.name );
    }
    
    let rabbit = new Rabbit("Rabbit");
    
    rabbit.sayHi();                        // Rabbit
    Rabbit.prototype.sayHi();              // undefined
    Object.getPrototypeOf(rabbit).sayHi(); // undefined
    rabbit.__proto__.sayHi();              // undefined