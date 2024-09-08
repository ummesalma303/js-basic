const mobiles = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    { name: 'Xaomi', price: 18000, camera: '16mp', color: 'white'},
    { name: 'Oppo', price: 24000, camera: '15mp', color: 'black'},
    { name: 'Iphone', price: 100000, camera: '16mp', color: 'gold' },
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

function getCheapestPhone(phone) {
    let min = phone[0];
    for (const num of phone) {
        if (num < min) {
            min = num
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log(cheap);
