/**
 * Count how many times a string has the letter a
 */

let string = 'hi there ! how are you all?';
let result = string.matchAll(/a/g);

console.log(Array.from(result).length);
