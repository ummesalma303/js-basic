// আমার কাছে একটা array তে কিছু নাম্বার আছে, আমাকে বের করতে হবে সবচেয়ে বড় নাম্বার কোনটা ।
 const numbers = [2, 4, 21, 5, 6, 23, 20, 9];

function biggestNumber(array) {
    if (!Array.isArray(array)) {
        return "please provide a valid array.!";
    }
    let biggest = array[0];
    for (const number of array) {
        if (number > biggest) {
            biggest = number;
        }
    }
    return biggest
}
const result = biggestNumber(numbers);
console.log(result);
