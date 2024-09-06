// sum of odd number.js

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
let odd = 91;
let sumOdd =0;

while (odd <= 129) {
  if (odd % 2!==0) {
    sumOdd+=odd;
    console.log(odd)
  }
  odd++;
}
console.log("sum of odd numbers from 91 to 129" + sumOdd)

let sumEven = 0;
let even= 51;
while (even <= 85) {
  if (even % 2===0) {
    sumEven += even;
    console.log(even)
  }
  even++
}
console.log("sum of even numbers from 51 to 85"+ sumEven)