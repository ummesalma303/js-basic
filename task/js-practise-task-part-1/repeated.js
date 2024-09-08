/**
 * ### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0

 */

const numbers = [5, 6, 11, 12, 98];

function repeatedNumber(number) {
    let unique = [];
   for (const element of number) {
     if (element === element) {
        unique+=element
       }
       let result = unique.length
    return result;
   }
}

const result = repeatedNumber(numbers);
console.log(result);
