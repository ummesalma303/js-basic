/*Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallest(name) {
  let smallName = name[0];
  for (let str of name) {
    if (str.length < smallName.length) {
      smallName = str
    }
  }
  return smallName;
}

const result = smallest(heights2);
console.log('the smallest name is:', result)
