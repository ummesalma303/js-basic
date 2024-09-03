//slice
let address = 'rajshahi homna';
//const part =address.slice(2,7);
const part = address.slice(2);
console.log(part.split(''));

//split 
let dev =' i am very hardworking developer';
console.log(dev.split(' '));
console.log(dev.split('a'));

//join()
const friendsStr = 'Rahim,kahim,dahim,lahim,fahim';
console.log(friendsStr.split(','));
const realFriends =['arha','smu','sabi']
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));