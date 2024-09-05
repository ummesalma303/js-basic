/*without loop*/

// console.log('umme');
// console.log('umme');
// console.log('umme');
// console.log('umme');
// console.log('umme');

/* using loop */

// for (var i = 0; i < 5; i++) {
//   console.log('Umme'+i)
// }


// const fruits = ['aam', 'jaam', 'kathal', 'lichu'];

/*without loop*/

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

/* using loop */
// for (var i = 0; i < fruits.length; i++) {
//  console.log(fruits[i])
// } 


/* decrementa loop */
// for (var i = fruits.length-1; i >= 0; i--) {
//  console.log(fruits[i])
// }


/*nested loop */

// for (let i = 0; i < 5; i++) {
//     console.log('umme',i);
//     for (let n = 0; n < 5; n++) {
//         console.log('flowers',n);
        
//     }
// }

// break and continue

const x = [1,2, 3, 4, 5, 6, 7, 8];
/* for of loop*/
for (const i of x) {
    if (i===5) {
        break;
    }
//    console.log(i);    
}

/* for loop*/
for (let i = 0; i < x.length; i++) {
    if (x[i]===5) {
        break;
    }
    console.log(i);
}

/*continue*/
const num = [1,2,4, 5, 6, 7, 8];

for (const element of num) {
    if (element===5) {
        continue;
    }
//    console.log(element);    
}
