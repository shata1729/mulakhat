// Solve the problem [JavaScript]
// Given an array of integers arr and an integer k, create a boolean function that checks if there exist two elements in arr such that we get k when we add them together.

// Example 1:

// Input: arr = [4, 5, 1, -3, 6], k = 11

// Output: true

// Explanation: 5 + 6 is equal to 11

// Example 2:

// Input: arr = [4, 5, 1, -3, 6], k = -2

// Output: true

// Explanation: 1 + (-3) is equal to -2

// Example 3:

// Input: arr = [4, 5, 1, -3, 6], k = 8

// Output: false

// Explanation: there is no pair that sums up to 8
// Parameters:
//  arr: Array<Number>
//  k: Number
// return type: Boolean

function findPair1(arr, k) {
    // your code here
    for (let i = 0; i < arr.length; i++) {
        let arr1 = [...arr];
        arr1.splice(i, 1);
        if (arr1.includes(k - arr[i])) {
            return true
        }
    }
    return false;
}

// By using a dictionary:

// Time complexity: O(n)
// Space complexity: O(n)

function findPair(arr, k) {
    let visited = {};
    for (element of arr) {
        if (visited[k - element]) {
            return true;
        }
        else {
            visited[element] = true;
        }
    }
    return false;
}


console.log(findPair([4, 5, 1, -3, 6], 11))
console.log(findPair([4, 5, 1, -3, 6], -2))
console.log(findPair([4, 5, 1, -3, 6], 8))