const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

// change object value

person.age = 98;
console.log(person.age);
person['salary'] = 45000;
console.log(person.salary);
person['fav places'] = ['maldives', 'bali', 'pataya']


const proName = 'profession';
person[proName] = 'dev';
console.log(person.proName);

