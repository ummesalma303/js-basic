/**
 * 
 * 
find out the  #occurrences of duplicate values from that array, print them.
after that return the #average of those duplicate numbers.

test case:

[1,2,4,1,3,2,2,5]

output will be: 
the number 1 is 2 times
the number 2 is 3 times.
like that.

finally
the average is: 1.6 (i.e. (1+1+2+2+2)/5

try to solve it within 5 pm. thank you

 */

const array = [1, 2, 4, 1, 3, 2, 2, 5];

function duplicate(number) {
    let count = [];
    for (const element of number) {
       if (count.includes(element)) {
           count.push(element)
       }
    }
    return count
}
console.log(duplicate(array));
