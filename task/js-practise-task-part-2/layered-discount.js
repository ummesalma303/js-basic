//layered-discount.js
  
/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
 */

/* আমি যদি আমি ১৫০ টা চকলেট ক্রয় করি তাহলে আমাকে ডিসকাউন্ট দেওয়া হবে।কিন্তু ১৫০ এর মধ্যে ১০০টা আমায় পুরো টাকা দিয়ে কিনতে হবে বাকি 50  টায় আমাকে ডিসকাউন্ট দেওয়া হবে  এটাকেই বলা  হয় multy layered discount*/

function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const adovePrice = 70;
    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total
    }else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        return first100Total
    }
}

const result = layeredDiscountedTotal(150);
console.log(result);
