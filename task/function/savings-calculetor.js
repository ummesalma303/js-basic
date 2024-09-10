/**
 * আপনার মাসিক খরচ, 
 * ঘর ভাড়া ৫০০০, খাবার খরচ ৩০০০, 
 * হাত খরচ ২০০০, 
 * মাস শেষে আপনার সেভিংস কত হবে, আপনার আয় এর উপরে ভিত্তি করে;
 * 
 */
function calculateSavings(income) {
    const houseRent = 5000;
    const mealCost = 4000;
    const personalExpense = 2000;
    const totalExpenses = houseRent + mealCost + personalExpense;
    const savings = income - totalExpenses;
    if (savings <= 0) {
        return 'earn more'
    }
    return savings
}

const result = calculateSavings(21000)
console.log(result)