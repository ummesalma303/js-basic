//odd-average.js
/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 * 1. put odd numbers in an array
 */

function oddAverage(number ) {
    const uniqueArray =[];
    for (let element of number) {
    if (element %2 !== 0) {
        uniqueArray.push(element)
    }
    }
    let sum = 0;
    for (let prop of uniqueArray) {
    sum+=prop;
    }
    const count =uniqueArray.length;
    const avg = sum / count;
    return avg;
}

const arr = [32,55,3,44,6,7,99,1];
const add = oddAverage(arr);
console.log(add);



function evenAvg(number ) {
    const count = [];
    for (let prop of number) {
    if (prop %2 ===0) {
        count.push(prop)
    }
    }
    let sum = 0;
    for (let items  of count) {
    sum+=items;
    }
const leng = count.length;
const avg = sum/leng;
    return avg
}

const array = [34,55,41,28,6, 49,82];

const evenAdd = evenAvg(array);
console.log(evenAdd)
