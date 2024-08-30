/**
 *  MULTI_LABEL CONDITION
 * jodi 5000 taka amount er beshi kisu kino tahole tumay 10% discount deowa hobe.R jodi tumi 2000 taka amount er beshi kisu kino tahole tumay 5% discount deowa hobe
 */

const price= 1000;

if (price >= 5000) {
    //  10% discount 
    const discount = price*10/100;
    payAmount = price - discount;
    console.log(payAmount);
    
}else if (price >= 2000) {
    // 5% discount
    const discount = price*5/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
 else {
    console.log(price);
}