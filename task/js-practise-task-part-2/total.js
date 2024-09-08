const products = [
{name:'shampoo',price:300},
{name:'brush',price:40},
{name:'shirt',price:500},
{name:'pant',price:600}
]

function getShoppingTotal(products) {
  let total = 0;
  for (let product of products) {
      total +=product.price
  }
  return total
}

const total=getShoppingTotal(products);
console.log(total)