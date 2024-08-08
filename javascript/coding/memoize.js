function addition(...args) {
    return args.reduce((sum, num) => sum + num, 0)
}
function memoizeAdd(fun) {
    let cache = {}
    return (args) => {
        const keys = JSON.stringify(args);
        if (cache[keys]) {
            console.log("Getting from memory")
            result = cache[keys]
            return result
        } else {
            console.log("Calculating")
            result = fun(args);
            cache[keys] = result;
            return result;

        }
    }
}

let add = memoizeAdd(addition);
console.log(add(2, 3))
console.log(add(6, 6))
console.log(add(2, 3))

