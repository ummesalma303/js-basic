/**
 * if it's raining i wont go outside.if it's not raining i'll go out  
 */
// const isRaining = true;
// if (!isRaining) {
//     console.log('i am go outside');
// } else {
//     console.log("oh no...😱" );
// }

// ternary
// const isRaining = false;
// !isRaining ?console.log('i am go outside'): console.log("oh no...😱" )

/**
 * if it's raining and if i have money more than 15 taka than i will go taxi, if not i will walk  
 */

// // && operator
// const me = 10;
// const isRaining = true;
// const money = 15;

// if (isRaining && money > 15) {
//     console.log('i will go taxi');
// } else {
//     console.log('i will walk');
    
// }


// // || operator
// const me = 16;
// const isRaining = true;
// const money = 15;

// if (isRaining || money >= 15) {
//     console.log('i will go taxi');
// } else {
//     console.log('i will walk');
// }

/**
 * if i have greater than 80tk i will eat biriyani if not.and i have more than 60tk then  i will eat noodles if i don't have .and i have 20tk than i will eat singhara and if i don't have that then i will go home by auto without eating     
 */

// const money = 80;
// if (money>=80) {
//     console.log('i will eat biriyani');
// }else if (money >= 60) {
//     console.log('i will eat noodles');
// }else if (money >= 20) {
//     console.log('i will eat singhara');
// } else {
//     console.log('i will go home by auto without eating'); 
// }


/**
 * if it's raining i wont go outside.if it's not raining i'll go out  
 */
const isRaining = true;
const haveUmbrella = false;
if (isRaining) {
    if (haveUmbrella) {
        console.log('i will go outside,i have my umbrella')
        
    } else {
        console.log("i will go outside")
        
    }
} else {
    console.log("i will go outside, it's sunny day" );
}
