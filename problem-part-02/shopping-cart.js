

//shoping-cart.js
const products = [
  { name: 'shampoo', price: 300, quantity:1},
  { name: 'brush', price: 40,quantity:3 },
  { name: 'shirt', price: 500,quantity:1},
  { name: 'pant', price: 600,quantity:4 }
]

function cartTotal(products) {
  let total =0;
    for (let product of products) {
        const thisProductCost = product.price * product.quantity
        total += thisProductCost;
  }
  return total
}

const shoppingCost = cartTotal(products )
console.log(shoppingCost);
