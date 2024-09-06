/**
 * continue ==> skit reset of the code for iteration.
 * break --> iam done with this loop, loop end
 */

// let n= 0;
// while (n<20) {
//     if (n==10) {
//         continue;
//     }
//     console.log(n);
//     n++;
// }
// let n = 0;
// while (n<20) {
//     n++;
//     if (n%2==0) {
//         continue;
//     }
//     console.log(n);
// }

let n = 0;

while (n < 14) {
    n++;
    if (n%5!== 0) {
        continue;
    } 
    console.log(n);
}
