const capitalize = str => {
    return str.toLowerCase().split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

console.log(capitalize("i love india"))