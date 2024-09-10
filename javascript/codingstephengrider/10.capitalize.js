function capitalize(str) {
    return str.split(' ')
        .map(w => capitalizeFirst(w))
        .join(' ')
}

const capitalizeFirst = s => (s && s[0].toUpperCase() + s.slice(1)) || "";

console.log(capitalize("this is india"))
