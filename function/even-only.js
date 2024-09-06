/**
 * create function that will return only the even numbers
 * return the sum of even numbers
*/

function evenNumbersOnly(number) {
    const evens = [];
   for (const element of number) {
     if (element % 2 === 0) {
        //  const result = sum += element;
        evens.push(element) 
    }
    }
    return evens
}

const number = [23, 4, 56, 78, 9, 11];
console.log(evenNumbersOnly(number));





function sumOfEvenNumbers(number) {
    let sum = 0;
    for (const element of number) {
        if (element % 2 === 0) {
            console.log(element);
            sum += element;
        }
    }
    return sum
}

const array = [45,90,87,31,38,2]
const sum = sumOfEvenNumbers(array);
console.log('sum of the even numbers is',sum);
