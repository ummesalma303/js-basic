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

let sumOdd =0;
for (let odd = 91; odd <= 129; odd ++) {
  if (odd % 2!==0) {
    sumOdd+=odd;
    console.log(odd)
  }
} 
console.log("sum of odd numbers from 91 to 129"+ sumEven)

let sumEven = 0;
for (let even= 51; even <= 85; even++) {
  if (even % 2===0) {
    sumEven += even;
    console.log(even)
  }
}
console.log("sum of even numbers from 51 to 85"+ sumEven)



