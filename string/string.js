//string
let country = "Bangladesh";
let district = "comilla";
let village = new String(district);//it's return a object
let y = new String("John");

console.log(country);
console.log(village);
console.log(y);
    console.log(typeof village);
    console.log(typeof country);
    console.log(district === village);

    // array
    const numbers = [12,35,56,67];
    console.log(numbers.length);
    console.log(country.length);
    console.log(numbers[1])
    numbers[1]= 67;
    console.log(numbers);
    console.log(district[4])

    // string is immutable --> not changeable
    // array is mutable --> you can change the array elements

    const capital = 'Dhaka';// string is immutable --> not changeable

    console.log(capital.length)
    console.log(capital[5]);
    console.log(capital[1] = 'Rajshahi')
    console.log(capital); 