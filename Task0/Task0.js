//Hello, world!
    //Task_1     
<html>
<body>
    <script>
        alert( "I'm JavaScript!" );
    </script>
</body>
</html>
function show_alert(){
    alert( "I'm JavaScript!" );
}
    //Task_2
    <script src="alert.js"></script>
    
    //file alert.js
    alert("I'm JavaScript!");

//Variable
    //Task_1
    let admin, name1;
    name1 = "John";
    admin = name1;
    alert( admin );
    
    //Task_2
    let ourPlanetName = "Earth";  //The variable for our planet
    let currentUserName = "John"; //The name of the current visitor
     
    //Task_3

//Data types
    //Task_1(What is the output of the script?)
    let name2 = "Ilya";
    alert( `hello ${1}` ); // hello 1
    alert( `hello ${"name2"}` ); // hello name2
    alert( `hello ${name2}` ); // hello Ilya

//Interaction: alert, prompt, confirm
    //Task_1
    let name3 = prompt("What is your name?", "");
    alert(name3);

//Basic operators, maths
     //Task_1. The postfix and prefix forms
     let a = 1, b = 1;

     let c = ++a; // a=2, c=2
     let d = b++; // b=2, d=1

     //Task_2. Assignment result
     let a1 = 2;
     let x = 1 + (a1 *= 2); //a=4, x=5

     //Task3. Type conversions
     "" + 1 + 0 // "10"
     "" - 1 + 0 // -1
     true + false // 1
     6 / "3" // 2
     "2" * "3" // 6
     4 + 5 + "px" // "9px"
     "$" + 4 + 5  //"$45"
     "4" - 2 // 2
     "4px" - 2  // Nan
     "  -9  " + 5 //"  -9  5"
     "  -9  " - 5 // -14
     null + 1 // 1
     undefined + 1 //Nan
     " \t \n" - 2 // -2

    //Task_4
    let a4 = +prompt("First number?", 1);
    let b4 = +prompt("Second number?", 2);

    alert(a + b);
    
//Comparisons
    //Task_1
    5 > 4 // true
    "apple" > "pineapple" //false
    "2" > "12" // true
    undefined == null // true
    undefined === null // false
    null == "\n0\n" // false
    null === +"\n0\n" // false

//Conditional branching: if, '?'
    //Task_1. Will alert be shown?
    if ("0") {
        alert( 'Hello' );
      } //Yes

    //Task_2
    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }

    //Task_3
    let value3 = prompt('Type a number', 0);

    if (value3 > 0) {
      alert( 1 );
    } else if (value3 < 0) {
      alert( -1 );
    } else {
      alert( 0 );
    }

    //Task_4
    let result = (a + b < 4) ? 'Below' : 'Over';

    //Task_5
    let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

//Logical operators
     //Task_1
     //Task_2
     //Task_3
     //Task_4
     //Task_5
     //Task_6
     //Task_7
     //Task_8
     //Task_9

//Loops: while and for
