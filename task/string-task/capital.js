 /*
 Capitalize Every first Letter of each word in a String
 */
 
 
const str = 'horse eggs to chiCken eggs';

let upper = str.toUpperCase().split(' ');
for (let prop of upper) {
  const capital = prop.charAt(0) + prop.toLowerCase().slice(1);
  console.log(capital)
} 