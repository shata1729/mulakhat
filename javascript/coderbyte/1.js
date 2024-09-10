// An array and a number A is given. Determine if any two numbers within the array sum to A.

const check = (arr, A) => {
    for (let n = 0; n < arr.length; n++) {
        let arr1 = [...arr];
        arr1.splice(n, 1)
        if (arr1.includes(A - arr[n])) {
            return true;
        }
    }
    return false;
}

console.log(check([2,3,5,5,6],6))