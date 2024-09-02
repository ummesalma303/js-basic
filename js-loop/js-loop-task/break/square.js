/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let num = 1; num <= 10; num++) {
      let square = num*num;
      
      if (num===square) {
        console.log(square);
        break;
      }
}