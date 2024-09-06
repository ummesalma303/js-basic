/**
 * ### Task-3
 * 1. Write a function called make_avg() 
 * 2. which will take an array of integers 
 * 3. and the size of that array and 
 * 4.return the average of those values.

 */

// Write a function called make_avg()
function make_avg(numbers) {
    let sum = 0;
    // the size of that array
    const size = numbers.length;
    for (const element of numbers) {
       sum += element;
    }
    // return the average of those values
    const average = sum / size
   return average
    
}
// take an array of integers
const arr = [32, 5, 6, 9];
const result = make_avg(arr);
console.log(result);
