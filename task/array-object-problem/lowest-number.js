// js-problems-part2-practice-tasks


/*Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];  */

const heights2 =  [167, 190, 120, 165, 137];  

function getMin(numbers) {
  let lowestNumber = numbers[0];
  for (let num of numbers ) {
    if (num < lowestNumber) {
      lowestNumber = num
    }
  }
  return lowestNumber
}

const result = getMin(heights2);
console.log('the lowesr number is:',result)

