// object
const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata'],
    exam: {
        name: 'Final Exam',
        marks: 100
    }
}
// console.log(person);

/* dot notation */
console.log(person.name);
console.log(person.exam.marks);

/* bracket Notation  */
console.log(person['name']);
//some times value cannot be access with dot notation
// error
// console.log(person.'fav places')
console.log(person['fav places']);

// access using variable
const keyName = 'salary';
console.log(person[keyName]);
