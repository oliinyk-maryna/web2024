//Methods of primitives
  //Can I add a string property?
  let str = "Hello";
  str.test = 5;
  alert(str.test); //undefined (no strict mode) or An error (strict mode).
  
//Numbers
  //Sum numbers from the visitor
  let a = +prompt("The first number?", "");
  let b = +prompt("The second number?", "");
  
  alert( a + b );

  //Why 6.35.toFixed(1) == 6.3?
  alert( 6.35.toFixed(20) ); // 6.34999999999999964473
  alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

  //Repeat until the input is a number
  function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);

  //An occasional infinite loop
  let i = 0;
  while (i != 10) {
    i += 0.2;
  } //That’s because i would never equal 10. Because of the precision losses when adding fractions like 0.2.

  //A random number from min to max
  function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );

  //A random integer from min to max
  function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );

//Strings
  //Uppercase the first character
  function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") );

  //Check for spam
  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

  //Truncate the text
  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
  //Extract the money
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }

  
//Arrays
  //Is array copied?
  let fruits = ["Apples", "Pear", "Orange"];

  // push a new value into the "copy"
  let shoppingCart = fruits;
  shoppingCart.push("Banana");
  
  // what's in fruits?
  alert( fruits.length ); // 4
   
  //Array operations.
  let styles = ["Jazz", "Blues"];
  styles.push("Rock-n-Roll");
  styles[Math.floor((styles.length - 1) / 2)] = "Classics";
  alert( styles.shift() );
  styles.unshift("Rap", "Reggae");

  //Calling in an array context
  let arr1 = ["a", "b"];

  arr1.push(function() {
    alert( this );
  })
  
  arr1[2](); // масив: a,b,function(){...}

  //Sum input numbers
  function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );

  //A maximal subarray
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0

//Array methods
   //Translate border-left-width to borderLeftWidth
           
function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
   function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr2 = [5, 3, 8, 1];
  
  let filtered = filterRange(arr2, 1, 4);
  
  alert( filtered ); // 3,1 (matching values)
  
  alert( arr2 ); // 5,3,8,1 (not modified)

    
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr3 = [5, 3, 8, 1];

filterRangeInPlace(arr3, 1, 4); // removed the numbers except from 1 to 4

alert(arr3); // [3, 1]

   //Sort in decreasing order
   let arr4 = [5, 2, 1, -10, 8];

   arr4.sort((a, b) => b - a);
   
   alert( arr4 );

   //Copy and sort array
   function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr5 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr5);
  
  alert( sorted );
  alert( arr5 );

   //Create an extendable calculator
   function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

   //Map to names
   let alex = { name: "Alex", age: 25 };
   let olga = { name: "Olga", age: 30 };
   let ivan = { name: "Ivan", age: 28 };
   
   let users1 = [ alex, olga, ivan ];
   
   let names = users1.map(item => item.name);
   
   alert( names ); // Alex, Olga, Ivan

   //Map to objects
   let sophia = { name: "Sophia", surname: "Jones", id: 1 };
   let max = { name: "Max", surname: "Taylor", id: 2 };
   let emma = { name: "Emma", surname: "Anderson", id: 3 };
   
   let users = [ sophia, max, emma ];
   
   let usersMapped = users.map(user => ({
     fullName: `${user.name} ${user.surname}`,
     id: user.id
   }));
   
   /*
   usersMapped = [
     { fullName: "John Smith", id: 1 },
     { fullName: "Pete Hunt", id: 2 },
     { fullName: "Mary Key", id: 3 }
   ]
   */
   
   alert( usersMapped[0].id ); // 1
   alert( usersMapped[0].fullName ); // John Smith

   //Sort users by age
   function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let alexs = { name: "Alex", age: 25 };
  let oliver = { name: "Oliver", age: 30 };
  let sophie = { name: "Sophie", age: 28 };
  
  let arr6 = [ oliver, alex, sophie ];
  
  sortByAge(arr6);
  
  // now sorted is: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete

   //Shuffle an array
   function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr7 = [1, 2, 3];
  shuffle(arr7);
  alert(arr7);

   //Get average age
   function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
        
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr8 = [ john, pete, mary ];
  
  alert( getAverageAge(arr8) ); // 28

   //Filter unique array members
   function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

   //Create keyed object from array
   function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

//Map and Set
   //Filter unique array members
   function unique(arr) {
    return Array.from(new Set(arr));
  }

   //Filter anagrams
   function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );

   //Iterable keys
   let map = new Map();

   map.set("name", "John");
   
   let keys = Array.from(map.keys());
   
   keys.push("more");
   
   alert(keys); // name, more
    

//WeakMap and WeakSet
   //Store "unread" flags

   let messages = [
     {text: "Hello", from: "John"},
     {text: "How goes?", from: "John"},
     {text: "See you soon", from: "Alice"}
   ];
   
   let readMessages = new WeakSet();

   readMessages.add(messages[0]);
   readMessages.add(messages[1]);

   readMessages.add(messages[0]);
   alert("Read message 0: " + readMessages.has(messages[0])); // true
   
   messages.shift();

   //Store read dates
   let readMap = new WeakMap();
   readMap.set(messages[0], new Date(2017, 1, 1));

//Object.keys, values, entries
   //Sum the properties
   function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) );

   //Count properties
   function count(obj) {
    return Object.keys(obj).length;
  }

//Destructuring assignment
   //Destructuring assignment
   let user1 = {
    name: "John",
    years: 30
  };
  
  let {name, years: age, isAdmin = false} = user1;
  
  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false

   //The maximal salary
   function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

//Date and time
  //Create a date
  let d1 = new Date(2012, 1, 20, 3, 12);
  alert( d1 );

  //Show a weekday
  function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) ); // FR

  //European weekday
  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }

  //Which day of month was many days ago?
  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  //Last day of month?
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  //How many seconds have passed today?
  function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  alert( getSecondsToday() );

  //How many seconds till tomorrow?
  function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
  }

  //Format the relative date
  function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }

//JSON methods, toJSON
  //Turn the object into JSON and back
  let user = {
    name: "John Smith",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));

  //Exclude backreferences
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  