/*revers array */
const numbers = [1, 2, 3, 4, 5, 6, 7];
// let reverse = numbers.reverse()
// console.log(numbers);//change original array
// console.log(reverse);


/*reverse array using for of loop */
const rev = [];
for (const item of numbers) {
    rev.unshift(item);
}
console.log(rev);

/*reverse array using for loop */
const reverseNumber = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reverseNumber.unshift(num)
}
console.log(reverseNumber);


/*reverse array using decremental for loop */
const revers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i]
    revers.push(num)
}
console.log(revers);
