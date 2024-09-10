const typeOf = input => {
    const rawObj = Object.prototype.toString.call(input).toLowerCase();
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObj)[1];
    return type;
}

const shallowCompare = (source, target) => {
    if (typeOf(source) !== typeOf(target)) return false;
    if (typeOf(source) === 'array') {
        if (source.length !== target.length) {
            return false;
        }
        return source.every((el, index) => el === target[index])
    }
    if (typeOf(source) === 'object') {
        if (Object.keys(source).length !== Object.keys(target).length) {
            return false;
        }
        return Object.keys(source).every(key => source[key] === target[key])
    }
    if(typeOf(source) === 'date'){
        return source.getTime() === target.getTime();
    }
    return source === target;
}

console.log(shallowCompare(2, 2))
console.log(shallowCompare([1, 2], [1, 2]))
console.log(shallowCompare([1, 2], [2, 2]))
console.log(shallowCompare({ a: 1 }, { a: 1 }))
