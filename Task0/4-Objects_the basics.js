// Objects
// Task 1: Hello, object
let user1 = {};
user1.name = "John";
user1.surname = "Smith";
user1.name = "Pete";
delete user1.name;

// Task 2: Check for emptiness
function isEmpty1(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// Task 3: Sum object properties
let salaries1 = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum1 = 0;
for (let key in salaries1) {
  sum1 += salaries1[key];
}

alert(sum1); // 390

// Task 4: Multiply numeric property values by 2
function multiplyNumeric1(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

// Object methods, "this"
// Task 1: Using "this" in object literal
function makeUser1() {
  return {
    name: "John",
    ref: this
  };
}

let user2 = makeUser1();

alert(user2.ref.name); // Error: Cannot read property 'name' of undefined

// Task 2: Create a calculator
let calculator1 = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator1.read();
alert(calculator1.sum());
alert(calculator1.mul());

// Task 3: Chaining
let ladder1 = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  }
};

ladder1.up().up().down().showStep().down().showStep(); // shows 1 then 0

// Constructor, operator "new"
// Task 1: Two functions – one object
let obj1 = {};

function A1() { return obj1; }
function B1() { return obj1; }

alert(new A1() == new B1()); // true

// Task 2: Create new Calculator
function Calculator1() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator2 = new Calculator1();
calculator2.read();

alert("Sum=" + calculator2.sum());
alert("Mul=" + calculator2.mul());

// Task 3: Create new Accumulator
function Accumulator1(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };
}

let accumulator1 = new Accumulator1(1);
accumulator1.read();
accumulator1.read();
alert(accumulator1.value);
