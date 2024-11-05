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
   
   //Output a single-linked list
   //Output a single-linked list in the reverse order