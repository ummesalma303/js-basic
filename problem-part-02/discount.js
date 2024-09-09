// discount.js

/**
 * upto 100: ---> 50
 * more than 101-200: --> 40
 * more than 200: --> 30
 */
 
 
 
//quality বের করার নিয়ম হচ্ছে প্রতি পিসের প্রাইসের সাথে quantity টা কে গুণ করে দেওয়া।যেমনঃএকটা চকলেটের দাম ত্রিশ টাকা এখন তিনটি চকলেটের দাম কত? ৯০ টাকা তাইনা।৩০*৩=৯০
//যদি quantity 100 এর কম হয় তাহলে দাম পড়বে ১০০ টাকা করে ।( আমি তাকে কোন ডিসকাউন্ট দিব না। ১০০টাকার জিনিস ১০০টাকায় বিক্রি করবো।)

//যদি ১০০ থেকে বেশি হয় ২০০ সমান হয় তাহলে ৯০ টাকা রাখবো।(যেহেতু এতগুলো প্রোডাক্ট কিনেছে তাই আমি তার থেকে ১০টাকা করে কম নিতে পারি)
//আর যদি ২০০ থেকেও বেশি হয় তাহলে ৭০ টাকা করে রাখবো।(তাকে আমি ত্রিশ টাকা করে ডিসকাউন্ট দিচ্ছি। )



function discountedPrice(quantity) {
if (quantity <= 100) {
    const total = quantity *50;
    return total
} else if (quantity <= 200) {
    const total = quantity *40;
    return total
} else {
    const total = quantity *30;
}
}

const total = discountedPrice(5);
console.log(total);  