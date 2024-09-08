// normal if else conditional
const umu = 5;
const mahi = 8;

if (umu > mahi) {
    console.log('mahi will get the strawberry')
} else {
     console.log('umu will eat the strawberry')
}

// inside a function

function getMax(num1,num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const max1 = getMax(4, 9);
const max2 = getMax(9, 3);
const max3 = getMax(2, 14);
console.log(max1,max2,max3);

const max = Math.max(34, 65, 67, 87, 99, 123);
console.log(max);
