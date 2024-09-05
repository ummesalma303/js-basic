//length, push,pop method
const numbers = [56,78,89,67];
let num = numbers[1]
let push = numbers.push(36,86);
console.log(numbers)

let pop = numbers.pop();
console.log(numbers)


 //The concat() method creates a new array by merging (concatenating) existing arrays
const fruits = ['apple','banana','mango'];
const flower = ['shapla','golap','joba'];

let total = fruits.concat(flower);
console.log(total)


//indexOf,include method 
let index = total.indexOf('golap');
let notfound = total.indexOf('lal')
console.log(index);
console.log(notfound);

let inc = total.includes('apple')
console.log(inc)


//join ( )

let join =total.join('*')
console.log(join)

// split
let str = 'shapla,golap,joba';

let split = str.split('')
let a = str.split('a');
console.log(split);
console.log(a); 


//shift & unshift method 

let flowers = ['shapla','joba','beli','kishnochura'];
 
let unshift = flowers.unshift('kodom','golap');
console.log(flower)
let shift = flowers.shift()

console.log(flowers)

//iaArray
console.log(typeof flowers)//prototype objects 
console.log(Array.isArray(flowers))//you can use this 

//slice method

let slice = flower.slice(1,4)
console.log(slice);

