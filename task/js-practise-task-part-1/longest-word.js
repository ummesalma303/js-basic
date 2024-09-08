/*Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming*/

  const input = "I am learning Programming to become programmer";
  
  function longestWord(word) {
    const array = word.split(' ');
    let total='';
    for (let element of array) {
      if (element.length > total.length) {
          total = element;
      }
    }
   return total;
  }
 console.log(longestWord(input));
