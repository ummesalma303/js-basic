const person = {
    name: "arha",
    address: "dhaka"
}

function showInfo(info) {
    if (typeof info !== 'object') {
        return "invalid object"
    }
    const capitalizedName = info.name[0].toUpperCase() + info.name.slice(1)
    const capitalizedAddress = info.address[0].toUpperCase() + info.address.slice(1)
    const result = capitalizedName +"@"+capitalizedAddress+'.com'
    return result
}

console.log(showInfo(person));
