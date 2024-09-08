/**
 * Write a function to count the number of vowels in a string.

*/

const sentence = 'I am learning Programming to become programmer';
const vowelList = ['a','e','i','o','u']
function vowels(str) {
  let count = '';
  for (let items of str) {
    if (vowelList.includes(items)) {
      count++
    }
  }
  return count
}

const total = vowels(sentence);
console.log(total)
