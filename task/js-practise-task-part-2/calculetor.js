 function add(num1,num2) {
   const sum = num1 +num2;
   return sum
 }
 function subtract(num1,num2) {
   const subtract = num1 - num2;
   return subtract
 }
 function multiply(num1,num2) {
   return num1 * num2;
 }
 
 function divide(num1,num2) {
   return num1/num2;
 }
 
 
 
 function calculator(a,b,operation) {
   if (operation === 'add') {
     const result = add(a,b);
     return result
   } else if (operation === 'substract') {
     const result = subtract(a,b)
     return result
   } else if (operation === 'multiply') {
     const result = multiply(a,b);
     return result
   } else if (operation ==='devide') {
     const result = divide(a,b);
     return result
   } else {
    return "Only 'add', 'subtract', 'multiply', 'divide' operation allowed."
   }
 }
 
 
 const result = calculator(5,2,'multiply');
 console.log(result)