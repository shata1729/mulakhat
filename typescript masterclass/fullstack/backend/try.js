let arr = [1, [2, [3, 4], 5], 6]

// console.log(arr.flat(Infinity));
// let flatArr = [];
// // arr.forEach(e => {
// //     if (typeof e === 'string') {
// //         flatArr.push(e)
// //     } else {
// //         if (typeof e === 'object' && e.length > 0) {
// //             flatArr.push(...e)
// //         }
// //     }
// // })

const flattenArr = (...arr) => {
    let flatArr = []

    for (let e of arr) {
        console.log(e)
        if (typeof e === 'string') {
            // flatArr.push(e)
            return e
        } else {
            if (typeof e === 'object' && e.length > 0) {
                return e.concat(flattenArr(...e))
            }
        }
    }
}

let result = flattenArr(arr)
console.log(result)