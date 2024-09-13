/**
 * 
 * 
find out the  #occurrences of duplicate values from that array, print them.
after that return the #average of those duplicate numbers.

test case:

[1,2,4,1,3,2,2,5]

output will be: 
the number 1 is 2 times
the number 2 is 3 times.
like that.

finally
the average is: 1.6 (i.e. (1+1+2+2+2)/5

try to solve it within 5 pm. thank you

 */

// const array = [1, 2, 4, 1, 3, 2, 2, 5];

// function duplicate(number) {
//     let count = [];
//     for (const element of number) {
//        if (count.includes(element)) {
//            count.push(element)
//        }
//     }
//     return count
// }
// console.log(duplicate(array));






function findingSmallest(numbers) {
    let smallestNumber = numbers[0];
for (const element of numbers) {
   if (element < smallestNumber) {
    smallestNumber = element
    }
    }
    return smallestNumber
}
// console.log(findingSmallest([10,33,5,99,6]));



/**
 * Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.
Sample Input-1:
[2023,2024,2025,2028,2030]

Sample Output:
[2024, 2028]
 */


function findLeapYear(arrOfYears) {
    let leapYear = [];
    for (const element of arrOfYears) {
        if (element % 4 === 0) {
        leapYear.push(element)
    }
    }
    return leapYear
}
// console.log(findLeapYear([2023,2024,2025,2028,2030]));




/**
 * What are the odds??
Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

Sample Input:
[5, 7, 8, 10, 45, 30]

Sample Output:
57
 */


function findOddSum(arrOfNumbers) {
    let sumOdd = 0;
    for (const element of arrOfNumbers) {
        if (element % 2 === 1) {
            sumOdd += element
        }
    }
    return sumOdd
}
// console.log(findOddSum([5, 7, 8, 10, 45, 30]));



/*
Find the second largest.
You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.
    Sample Input:  
    [10,33,5,99,6]  

    Sample output:  
    33
 */

function secondLargest(numbers) {
    let largest = 0;
for (const element of numbers) {
   if (element > largest) {
       largest = element;
   }
    }
    return largest
}
console.log(secondLargest([10,33,5,99,6]));
