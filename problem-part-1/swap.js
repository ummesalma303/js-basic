/* value swap */

let a = 5;
let b = 7;
// console.log(a,b);

a = b;
b = a;
// console.log(a, b);

a = 6;
b = 8;
let temp = a;
a = b;
b = temp;
console.log(temp,a,b);
console.log(a, b);

//-----------------------
x = 3;
y = 7;
console.log(x,y);
[x, y] = [y, x];
console.log(x,y);
console.log(x);