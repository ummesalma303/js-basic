/**
 * Count how many times a string has the letter a or A
 */

let string = 'hi there ! how are you all?';
let result = string.matchAll(/a/gi);

console.log(Array.from(result));
