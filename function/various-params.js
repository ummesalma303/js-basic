/**
 * for a given string tell me whether it has even number of characters or not
 * 
*/

// function evenSizedString(str) {
//     const size = str.length;
//     console.log(str,size);
//     if (size % 2 === 0) {
//         console.log("even");
//         return true
//     } else {
//         console.log('odd:'); 
//         return false
//     }
// }
// evenSizedString('hiji biji, hiji biji, hiji biji2');
// evenSizedString('hiji biji, hiji biji, hij');



/* double or triple */

function doubleOrTriple(number,doDouble) {
    if (doDouble) {
        const result1 = number * 2;
        return result1;
    } else {
        const result2 = number * 3;
        return result2;
    }
}

// console.log(doubleOrTriple(6, true));
// console.log(doubleOrTriple(7, false));



function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}

console.log(numberOfElements([24,4345,54,56]));



function getAge(person) {
    const age = person.age;
    return age;
}

person = {
    age: 30
}
console.log(getAge(person));
