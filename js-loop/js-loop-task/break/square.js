/*
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// first way
for (var i = 1; i <= 100; i++) {
  let total = i*i;
  if (i <= total) {
    console.log(total)
    break;
  }
} 

// second way
for (var i = 1; i < 100; i++) {
  if (Math.sqrt(i)%1===0) {
    console.log(i);
    break;
  }
}