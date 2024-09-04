/**
 * # array-looping-tasks

### Task 1

Write a JavaScript code to reverse the array colors `without using the reverse method`.

**Input:**
`const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

**Output:**

`['orange', 'yellow', 'green', 'blue', 'red']`
 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverse = [];
for (const element of colors) {
    reverse.unshift(element) 
}
console.log(reverse);