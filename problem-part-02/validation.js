//validation

// function multiply(num1, num2) {
//    const multi  = num1 * num2;
//    return multi
//  }
 
//  const result=multiply(5+6,7*8);
//  console.log(result)


// number validation
function multiply(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
   const multi  = num1 * num2;
   return multi
 }
 
 const result=multiply(1,'seven');
//  console.log(result)



// string validation
function fullName(firstName, leastName) {
    if (typeof firstName !== "string") {
        return 'First name should be a string';
    }else if (typeof leastName !== "string") {
        return 'Least name should be a string';
    }
    firstName + " " + leastName;
}

const full = fullName('sf', 9);
// console.log(full);




// function validation
function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object';
    }
    const price = product.price
    return price
}
// const price = getPrice({ name: 'sandwich', price: 1800 });
console.log(getPrice(32));


// array validation
function getSecond(arr) {
    if (Array.isArray(arr) === false) {
        return 'Please provide an array'
    }
    const array = arr[1]
    return array;
}

// const array = getSecond([32, 45, 56]);
// console.log(array);
console.log(getSecond(65));
