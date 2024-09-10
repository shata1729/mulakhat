const memoizeAdd = () => {
    let cache = {}
    return (value) => {
        if (value in cache) {
            console.log('calculating from cache')
            return cache[value]
        } else {
            cache[value] = value + 10;
            console.log('remembering the result for next time')
            return value + 10;
        }
    }
}

const newAdd = memoizeAdd();

console.log(newAdd(9))
console.log(newAdd(9))