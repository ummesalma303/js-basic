// // odd numbers

// for (let i = 0; i < 100; i++) {
//     if (i%2===0) {
//        console.log(i);      
//     }   
// }

// even numbers

// for (let i = 0; i < 100; i++) {
//     if (i%2 !== 0) {
//        console.log(i);      
//     }   
// }


// for (let i = 1; i < 50; i+=2) {
//     if (i%2===0) {
//        console.log(i);      
//     }   
// }



// give me the list numbers between 1 to 30 divisible by 5
// for (let n = 0; n <= 30; n++) {
//     if (n%5 === 0) {
//        console.log(n);
       
//     }   
// }

// give me the list numbers between 1 to 30 divisible by 3 or 5
// for (let n = 0; n <= 30; n++) {
//     if (n%3 === 0 && n%5===0) {
//        console.log(n);
//     }   
// }

// give me the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i%3===0) {
        sum += i
     console.log(i);
    }
}
console.log(sum);
