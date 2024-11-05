// Task_1 - Hello, world!
<html>
<body>
    <script>
        alert("I'm JavaScript!");
    </script>
</body>
</html>
function show_alert() {
    alert("I'm JavaScript!");
}

// Task_2
<script src="alert.js"></script>

// file alert.js
alert("I'm JavaScript!");

// Variable
// Task_1
let admin, name1;
name1 = "John";
admin = name1;
alert(admin);

// Task_2
let ourPlanetName = "Earth";  // The variable for our planet
let currentUserName1 = "John"; // The name of the current visitor

// Task_3
const BIRTHDAY = '18.04.1982'; 
const AGE = someCode(BIRTHDAY);

// Data types
// Task_1
let name2 = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name2"}`); // hello name2
alert(`hello ${name2}`); // hello Ilya

// Interaction: alert, prompt, confirm
// Task_1
let name3 = prompt("What is your name?", "");
alert(name3);

// Basic operators, maths
// Task_1
let a1 = 1, b1 = 1;

let c = ++a1; // a1=2, c=2
let d = b1++; // b1=2, d=1

// Task_2
let a2 = 2;
let x1 = 1 + (a2 *= 2); // a2=4, x1=5

// Task_3
"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

// Task_4
let num1 = +prompt("First number?", 1);
let num2 = +prompt("Second number?", 2);
alert(num1 + num2);

// Comparisons
// Task_1
5 > 4; // true
"apple" > "pineapple"; // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false

// Conditional branching: if, '?'
// Task_1
if ("0") {
    alert('Hello');
} // Yes

// Task_2
let value1 = prompt('What is the "official" name of JavaScript?', '');
if (value1 == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

// Task_3
let value2 = prompt('Type a number', 0);
if (value2 > 0) {
    alert(1);
} else if (value2 < 0) {
    alert(-1);
} else {
    alert(0);
}

// Task_4
let result1 = (a1 + b1 < 4) ? 'Below' : 'Over';

// Task_5
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' : '';

// Logical operators
// Task_1
alert(null || 2 || undefined); // 2

// Task_2
alert(alert(1) || 2 || alert(3)); // 1, 2

// Task_3
alert(1 && null && 2); // null

// Task_4
alert(alert(1) && alert(2)); // 1, undefined

// Task_5
alert(null || 2 && 3 || 4); // 3

// Task_6
if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// Task_9
let userName1 = prompt("Who's there?", '');
if (userName1 === 'Admin') {
    let pass = prompt('Password?', '');
    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName1 === '' || userName1 === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}

// Loops
// Task_1
let i1 = 3;
alert(i1--); // 3
alert(i1--); // 2
alert(i1--); // 1

// Task_2
let j1 = 0;
while (++j1 < 5) alert(j1);

let j2 = 0;
while (j2++ < 5) alert(j2);

for (let i2 = 0; i2 < 5; ++i2) alert(i2);
for (let i3 = 0; i3 < 5; i3++) alert(i3);

for (let i4 = 2; i4 <= 10; i4++) {
    if (i4 % 2 == 0) alert(i4);
}

let i5 = 0;
while (i5 < 3) {
    alert(`number ${i5}!`);
    i5++;
}

let num3;
do {
    num3 = prompt("Enter a number greater than 100?", 0);
} while (num3 <= 100 && num3);

let n1 = 10;
nextPrime:
for (let i6 = 2; i6 <= n1; i6++) { 
    for (let j3 = 2; j3 < i6; j3++) {
        if (i6 % j3 == 0) continue nextPrime;
    }
    alert(i6);
}

// Switch statement
// Task_1
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

let a3 = +prompt('a?', '');
switch (a3) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// Functions
function checkAge1(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function min(a, b) {
    return a < b ? a : b;
}

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x2 = prompt("x?", '');
let n2 = prompt("n?", '');
if (n2 < 1) {
    alert(`Power ${n2} is not supported, use a positive integer`);
} else {
    alert(pow(x2, n2));
}

// Arrow functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution."));
