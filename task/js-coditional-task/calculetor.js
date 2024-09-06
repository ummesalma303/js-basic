/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 78;
const student = true;
const ticket = 800;
if (age < 10) {
  console.log('your ticket is free')
}else if (student && age < 60) {
  discount = ticket * 50 / 100;
  payAmount = ticket - discount;
  console.log(payAmount)
} else if (age >= 60) {
  discount = ticket * 15 / 100;
  payAmount = ticket - discount;
  console.log(payAmount)
} else {
  console.log(ticket)
}
