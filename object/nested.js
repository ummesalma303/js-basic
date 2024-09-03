const collage = {
    name: 'vnc',
    class: [11, 12],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
/*access value */
console.log(collage["unique"].color);

// change value
collage.unique.result.merit = "top top top most top"
console.log(collage.unique.result.merit);

collage.events[1] = 'appel suti';
console.log(collage.events);

collage.events = '21 Feb';
console.log(collage.events);

/*delete property */
delete collage.unique.result.gpa;
console.log(collage);
