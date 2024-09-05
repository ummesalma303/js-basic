// object
const person = {
    name: 'arha',
    address: 'comilla',
    age: 48
}

// access object property
let name = person.name;
console.log(name);
console.log(person["age"]);


// added new property
person.eyeColor = 'black';
console.log(person);


// change value
person.name = 'faru';
console.log(person.name);


// change key
person.location
delete person.address;
console.log(person.location);


// two key same value
person.friendName = person.name;
person.friendName ='asu'
console.log(person);


// access keys and values
const keys = Object.keys(person);
const values = Object.values(person);
console.log(keys,values);


/*object looping */
for (const key in person) {
   console.log(key,person[key]);
   
}