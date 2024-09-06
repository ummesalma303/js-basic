/*function declared*/
function vaatKhao() {
  console.log('hand-wash kore asho');
  console.log('bosho');
  console.log('plate khabar nao');
  console.log('ghopat ghopat kore chabaiya khao');
}

/*call the function*/
vaatKhao();



/* number is parameter and 9, 12 etc it's argument */
function square(number) {
  console.log('value of the number parameter')
  const borgo = number * number ;
  console.log('square of the given number is:',borgo)
}

square(9);
console.log('---------------');
square(12);
square(5);
square(88);



/*sum */


function sum(num1,num2) {
  const total = num1 + num2;
  console.log(total);
}
sum(5,78);
sum(8,5);



function productPrices(tomato,carrots,avocado,mula) {
  const total = tomato + carrots + avocado +mula;
  console.log(total)
  console.log(mula)
}

productPrices(30,56,78);
productPrices(30,56,78,23); 
