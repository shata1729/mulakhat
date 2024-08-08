const double = (num) => {
    return 2 * num
}

Array.prototype.newMap = function (logic) {
    const output = []
    for (let i = 0; i < this.length; i++) {
        console.log(this[i])
        output.push(logic(this[i]))
    }
    return output;
}

let arr1 = [3, 5, 7, 2]

let arr2 = arr1.newMap(double)

console.log(arr2)