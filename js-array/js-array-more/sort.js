/*sorting string */
// const persons = ['rakib', 'nokib', 'sakib', 'akib', 'pakib', 'anis'];
// const sortPersons = persons.sort();
// console.log(sortPersons);

/*sorting number */
// const numbers = [1, 9, 3, 7, 2];
// const sortNumbers = numbers.sort();
// console.log(sortNumbers);

/* not sorting */
// const numbers = [1, 90, 35, 7, 2,32];
// const sortNumbers = numbers.sort();
// console.log(sortNumbers);

const persons = ['rakib', 'Nokib', 'sakib', 'Akib', 'pakib', 'anis'];
const sortPersons = persons.sort();
console.log(sortPersons)

/* 
Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending --> larger to smaller:  [8, 7, 6, 4, 3, 2]
*/

const numbers = [4, 7, 12, 8, 43, 6, 1];

const number_asc = [...numbers].sort((a, b) =>  a - b )
const number_dsc = [...numbers].sort((a, b) =>  b - a )
console.log(number_asc);
console.log(number_dsc);
