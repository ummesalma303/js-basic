// dvar iceCream = 30;
// var chocolate = 0.3;
// var total = iceCream + chocolate;
// // console.log(total);
// var decimal = parseFloat(total)
// console.log(decimal);//returns the number with decimals

// var iceCream = 30;
// var chocolate = 0.3;
// var total = iceCream + chocolate;
// var withoutDecimal = parseInt(total)
// console.log(withoutDecimal);//returns the number without decimals

// var text = parseInt("ajklsa")
// console.log(text);
//this text is not a number it"s a text, It cannot convert text to numbers so returns NaN

// Number
var iceCream = 30;
var chocolate = 0.3;
var chips = "10";
var total = iceCream + chocolate+chips ;
// console.log(total);
// here the numbers concatenation cause 10 is string

// concat two decimal number
var first = 0.1;
var second = 0.2;
var third = first+second;
console.log(third);
console.log(third.toFixed(2));//some times adding two decimal number gives wrong answer. inthat case toFixed()can also be use but it's returns string
// division
var first = -50;
var second = 2;
var division = first/second;
console.log(division);
