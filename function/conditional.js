function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}
const num1 = isEven(6);
const num2 = isEven(11);
console.log(num1,num2);



function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    } 
    return false;
}

console.log(isOdd(10));
console.log(isOdd(5));
