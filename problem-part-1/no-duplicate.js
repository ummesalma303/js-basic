//no-duplicate.js
/**
 * array has some duplicate elements
 * []
 */

const biriyaniKhor =['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul','cabul'];


function noDuplicate(array) {
    const unique =[];
    for (let items of array) {
    if (unique.includes(items)===false) {
    unique.push(items);
    }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);