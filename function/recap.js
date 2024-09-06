function add1(price1,price2) {
    const total = price1 + price2;
    return total
}

const billi = add1(67, 3);
const billi2 = add1(9, 3);


function add2(price1,price2) {
    return price1 + price2;
}
const billi3 = add2(8, 9);

console.log(billi, billi2, billi3);


/* math */

function doMath(num1,num2) {
    const sum = num1 + num2;
    const subs = num1 - num2;
    const multi = subs * sum;
    const result = multi / 2;
    return result
}

const result = doMath(92, 76);
console.log(result);
