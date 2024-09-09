/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
*/

function woodQuantity(chairQuantity,tableQuantity,bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood = perChairWood * chairQuantity;
    const tableTotalWood = perTableWood * tableQuantity;
    const bedTotalWood = perBedWood * bedQuantity;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood
}

const totalWood = woodQuantity(2, 1, 1);
console.log(totalWood);



/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 * 
*/

function dressQuantity(shirt,pant,shoe) {
    const perShirt = 300;
    const perPant = 500;
    const perShoe = 800;
    const totalShirt = perShirt * shirt;
    const totalPant = perPant * pant;
    const totalShoe = perShoe * shoe;
    const totalQuantity = totalShirt + totalPant + totalShoe;
    return totalQuantity;
}

const totalDressShoe = dressQuantity(2, 3, 1);
console.log(totalDressShoe);
