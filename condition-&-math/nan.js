//  isNan()
// not number, and can not be transform into number : true 
// number or can be transform into number : false

console.log(typeof isNaN)
let a = NaN === isNaN;
console.log(isNaN(a));

let b = 'ghjj';
console.log(isNaN(b));

// let b = 6;
// //console.log(isNaN(b))

// let c = '1';
// console.log(isNaN(c))

// function fname(param) {
  
// }
// console.log(typeof fname)


// comparison operator ==,===,!==,>=,<=,>,<

// let x = 6;
// let y = 5;
// console.log(x==y); // false

// let x = 5;
// let y = '5';
// console.log(x==y); //true

// let x = 6;
// let y = '5';
// console.log(x===y); //false

// let x = 6;
// let y = 5;
// console.log(x !== y); // true

// let x = 6;
// let y = 5;
// console.log(x >= y); //true

// let x = 6;
// let y = 5;
// console.log(x <= y); // false

// let x = 6;
// let y = 5;
// console.log(x > y); // true

// let x = 6;
// let y = 5;
// console.log(x < y); // false

// is change truthy value to falsy value
let x = true;
console.log(!x);

let y = false;
console.log(!y);

/**
 * "" this is a empty string 
 * " " this string that contains exactly one space character
 */


// let z = "";
// console.log(!z); //true

let z = " ";
console.log(!z); //false
console.log(z.length); 

// truthy and falsy value check 

let me = 'umme';
console.log(!!me);

let number = 564;
console.log(!!number);

let empty = '';
console.log(!!empty);
