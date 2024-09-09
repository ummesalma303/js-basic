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
    const abovePrice = 70;
    if (quantity <= 100) {
        // akhane 100 er thek kom hoi tahole kono discount nai tai quantity diye price k multiply korechi.
        const total = quantity * first100Price;
        return total
    } else if (quantity <= 200) {
        // jodi quantity 200er kom hoi tahole amar price ta dui vag hobe prothom 100 first 100price er motoi thakbe tai prothom 100er shathe first100price multiply hobe ,(prothom 100 niye kono shomossha nai atr shathe quantity multiply hobe.)
        
        const first100Total = 100 * first100Price;

        // second 100 prothom 100 er hishab tw amra aghei korchi.je first 100 same price thakbe tai full quantity thek first 100  minus korechi

        const remainingQuantity = quantity - 100;

        // ✅1. first 100 ber kora sesh,✅2.atar price ber kora sesh * 🔄akhon ata r second  100er price k multiply korte hobe

        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total
    }
    else {
        //200 er upor hole  prothom 200 te kon discount nai porertai kisu discount ase
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * abovePrice;
        const total = first100Total + second100Total + remainingTotal
        return total
    }
}
 

// const result = layeredDiscountedTotal(150);
// console.log(result);




//final

// function layeredDiscountedTotal (quantity) {
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200 = 70;

//     if (quantity <= 100) {
//         const total = quantity * first100Price;
//         return total
//     } else if(quantity <= 200){
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * 90;
//         const total = first100Total + remainingTotal;
//         return total
//     } else {
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }
// }
// const result = layeredDiscountedTotal(250);
// console.log(result);
