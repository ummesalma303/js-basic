// ### Task-4

// What will be the result of the following codes:

// **var a = isNaN(‘11’);**

// **var a = isNaN(2-10);**

// Explain your answers.


var a = isNaN('11');//output false; cause it's a number
console.log(a);

var a = isNaN(2-10); //output false; cause it's a number
console.log(a);
// It returns false because the isNaN method checks whether it is not a number. If it is not a number, it returns true and if it is a number, it returns false.
