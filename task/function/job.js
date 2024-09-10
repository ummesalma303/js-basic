/**
 * hsc,honors er total marks jodi 80 er beshi hoi tahole job pabe nahoi pabe na.
 * tobe jodi tara FFfamilyr hoi tahole she 20% marks beshi pabe.
 */

const person1 = {
    name: "abul kashem",
    honors: 20,
    hsc: 30,
    isFFfamily: true
}
const person2 = {
    name: "mokber mia",
    honors: 55,
    hsc: 32,
    isFFfamily: false
}

function jobSelection(info) {
    if (typeof info !== 'object') {
        return "invalid object"
    }
    let totalMarks = info.honors + info.hsc;
    if (info.isFFfamily) {
        totalMarks += totalMarks * 0.2
    }
     if (info.isFFfamily && totalMarks >= 80) {
        return "Aho vatija aho... chakri to tomari...!"
    } else if (info.isFFfamily && totalMarks < 80) {
        return "bad luck vatija.. next time...!";
    } else if (!info.isFFfamily && totalMarks >= 80) {
        return "you got the job... "
    } else if (!info.isFFfamily && totalMarks < 80) {
        return "Rajakaar rajakaar...!"
    }

}

console.log(jobSelection(person1))