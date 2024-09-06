/**
 * ### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

 */

function count_zero(numbers) {
    let count = 0;
    for (const element of numbers) {
        if (element === '0') {
            count++;
        }
    }
    return count
}

const str = '1 0 0 10 0 1';
const totalZero = count_zero(str);

console.log(totalZero);

