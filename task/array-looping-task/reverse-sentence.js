/**
 * 
### Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

**Input:**
`const statement = 'I am a hard working person'`

**Output:**

`'person working hard a am I'`

 */
/*reverse sentence using reverse() */
const statement = 'I am a hard working person';
let split = statement.split(' ');
console.log(split.reverse());

/* reverse sentence using for of */
// const statement = 'I am a hard working person';
let splitString = statement.split(' ');
let arr = [];
for (const element of splitString) {
    arr.unshift(element);
}
console.log(arr);
