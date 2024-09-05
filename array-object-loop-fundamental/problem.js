// //sum
// const numbers = [2, 3, 4, 5, 8, 7, 3];
// let text = 0;
// for (const item of numbers) {
//     text += item;
//     console.log(text);
// }
// console.log(text);

// even number
const numbers = [22, 33, 44, 55, 87, 79, 36];
let even = [];
for (const element of numbers) {
    if (element % 2 === 0) {
        even.push(element);
    }
}
console.log(even);
