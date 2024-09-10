// Given a non-empty array of integers arr, create a function that returns the sum of the subarray that has the greatest sum.
// We don't consider the empty array [] as a subarray.

// Example 1:

// Input: arr = [2, 3, -6, 4, 2, -8, 3]

// Output: 6

// Explanation: the maximum subarray is [4, 2], its sum is 6

// Example 2:

// Input: arr = [2, 3, -1, 4, -10, 2, 5]

// Output: 8

// Explanation: the maximum subarray is [2, 3, -1, 4], its sum is 8

// Example 3:

// Input: arr = [-3, -1, -2]

// Output: -1

// Explanation: the maximum subarray is [-1], its sum is -1


// By using Kadane's algorithm:

// Time complexity: O(n)
// Space complexity: O(1)

function maximumSubarray(arr){
    let globalSum = -Infinity;
    let localSum = 0;
    for(let element of arr){
      localSum = Math.max(element, localSum + element);
      globalSum = Math.max(globalSum, localSum);
    }
    return globalSum;
  }
  
let arr = [2, 3, -1, 4, -10, 2, 5]
  
console.log(maximumSubarray(arr))