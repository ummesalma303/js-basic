/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function  is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
*/

let sum = 0;
function sumOfNumbers(number) {
    for (const element of number) {
        sum +=element;
    }
    return sum;
}

const array = [2, 4, 5, 8];
const output = sumOfNumbers(array);
console.log(output);
