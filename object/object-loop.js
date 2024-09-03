const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}
console.log(mobile);

/* for of : array */
/* for in : object */

for (const key in mobile) {
    console.log(key+": "+mobile[key]);
    
}

// // for of
// const keys = Object.keys(mobile);
// for (const key of keys) {
//     console.log(key);  
// }


// const keys = Object.keys(mobile);
// // console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
    
// }

