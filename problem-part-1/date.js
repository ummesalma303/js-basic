const today = new Date();
console.log(today);

// custom date
const date = new Date('2028-06-19');
console.log(date);
// get date
console.log(date.getTime());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(today.getFullYear());
//set date
const specificDate = new Date('2055,11,28');
console.log(specificDate);

specificDate.setMonth(3);
console.log(specificDate.toLocaleString('ar-SA'));
console.log(specificDate.toLocaleString('bn-IN'));
console.log(specificDate.toLocaleString('cs-CZ'));