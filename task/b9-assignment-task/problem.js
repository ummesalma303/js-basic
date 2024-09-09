// // problem-1
// // Help The Zoo Manager
// const input = -93;
// function calculateMoney(ticketSale) {
//     if (ticketSale < 0) {
//         return 'Invalid Number'
//     }
//     return ( ticketSale * 120) - ( 500 + (8 * 50) )
// }

// const output = calculateMoney(input);
// console.log(output);


// problem-2
// Good Name , Bad Name
// const input = 78;
// function checkName(name) {
//     if (typeof name !== 'string') {
//         return 'invalid'
//     }
//     const checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
//     const leastLetter = name.slice(-1).toLowerCase()
//     let result = false;
//     for (const letter of checkArray) {
//         if (letter === leastLetter) {
//             result = true;
//             return result
//         }
//     }
//     return result ? 'good name' : 'bad name';
// }

// const output = checkName(input);
// console.log(output);


// problem-3
//Virus in my Array

// const input =[1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

// function deleteInvalids(array) {
//     if (Array.isArray(array) === false) {
//     return 'Invalid Array'
//     }
    
//     let uniqueArray = [];
//     for (const num of array) {
//        if (typeof num === 'number' && isNaN(num) === false) {
//            uniqueArray.push(num);
//     }
//    }
//     return uniqueArray
// }

// const output = deleteInvalids(input)
// console.log(output);




// //Problem 04 : Make A Great Password
// const passwordName = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// function password(obj) {
//     if (obj.name === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4) {
//         return 'invalid'
//     }
//     const capitalizedSiteName = obj.siteName[0].toUpperCase()+ obj.siteName.slice(1)
//     const capitalizedName = obj.name[0].toUpperCase()+obj.name.slice(1)
//     const output = capitalizedSiteName + '#' + capitalizedName + '@' + obj.birthYear
//     return output
// }

// const output = password(passwordName);
// console.log(output);



// Problem 05 : Monthly Savings of a Freelancer
// const arr = ;

function monthlySavings(arr,livingCost) {
  if (typeof Array.isArray(arr) ===false|| typeof livingCost !== 'number') {
    return 'Invalid'
  }
  let totalIncome = 0;
  for (let payment  of arr) {
    if (payment >= 3000) {
     let tax = payment * 0.2
     totalIncome += payment-tax
    } else {
      totalIncome += payment;
    }
  }
  const savings = totalIncome - livingCost;
  return savings >= 0 ? savings :'earn more'
}

console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
