// convert.js

// 12 inch 1feet

function inchToFeet(feet) {
  let result = feet / 12;
  return result
}

let height = inchToFeet(75);
console.log(height); 



function inchToFeet2(feet) {
  const feetFaction = feet / 12;
  const feetNumber = parseInt(feetFaction);
  const inchRemaining = feet % 12;
  const result = feetNumber + ' feet ' + inchRemaining + ' inch ';
  return result
}

let shuboHeight = inchToFeet2(55)

console.log(shuboHeight)


//mile to kilometers 

function mileToKilometers(miles) {
  const kilo = miles * 1.60934;
  return kilo
}

const kilometers = mileToKilometers(2);
console.log(kilometers)


//kilometers to miles

function kilometersToMiles(kilo) {
  const miles = kilo / 0.621371;
  return miles
}

const miles = kilometersToMiles(1);
console.log(miles) 