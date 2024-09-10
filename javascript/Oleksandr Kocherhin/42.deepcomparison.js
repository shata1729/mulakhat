const typeOf = input => {
    const rawObj = Object.prototype.toString.call(input).toLowerCase();
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObj)[1];
    return type;
}

const deepCompare = (source, target) => {
    if (typeOf(source) !== typeOf(target)) return false;
    if (typeOf(source) === 'array') {
        if (source.length !== target.length) {
            return false;
        }
        return source.every((el, index) => deepCompare(el, target[index]))
    }
    if (typeOf(source) === 'object') {
        if (Object.keys(source).length !== Object.keys(target).length) {
            return false;
        }
        return Object.keys(source).every(key => deepCompare(source[key], target[key]))
    }
    if (typeOf(source) === 'date') {
        return source.getTime() === target.getTime();
    }
    return source === target;
}

console.log(deepCompare(2, 2))
console.log(deepCompare([1, 2], [1, 2]))
console.log(deepCompare([1, 2], [2, 2]))
console.log(deepCompare({ a: 1, c: { b: 2 } }, { a: 1, c: { b: 2 } }))
