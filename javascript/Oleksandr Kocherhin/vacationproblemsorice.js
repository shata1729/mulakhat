// Mr. Yadav's Vacation 

// Rajesh Yadav is a English teacher at school who deceived the school into giving him 'n' days off from the school. Yadav wanted to go to Kerala with his daughters, so he wants to allocate several consecutive days to enjoy the holidays. Since he wants to make the best use of his time thus requiring careful preparation, he will only go for at least 'k' days. 

// You are given an array 'Weather' containing the weather forecast (That is temperature on the i-th day) in Kerala. Temperature is in degrees. Mr. Yadav was born in Himachal, so he can go on vacation only if the temperature does not rise above 't' degrees throughout his trip. He asks you to help him and count the number of ways to choose vacation dates in Kerala. 

// Example: 

// Input: n = 3 , k = 1, t = 15 

 

// Weather = [-5,0,-10] 

 

// Output: 6 

 

// Explanation :  

 

// In this example Mr. Yadav can go on these suitable dates [1], [2], [3], [1, 2], [2, 3], [1, 2, 3] which is equal to 6. 

 
const getCombinations = (n, k, maxTemp, subarrays) => {
    let filteredArrays = subarrays.filter(arr => {
        for (let el of arr) {
            if (el > maxTemp) return false;
        }
        if (arr.length <= n && arr.length >= k) return true;
    })

    console.log(filteredArrays)
    return filteredArrays.length;
}

function getAllSubarrays(arr) {
    const subarrays = [];
    // Generate subarrays of all possible lengths
    for (let start = 0; start < arr.length; start++) {
        for (let end = start + 1; end <= arr.length; end++) {
            subarrays.push(arr.slice(start, end));
        }
    }
    return subarrays;
}

let n = 3, k = 1, t = 15

const weather = [-5, 0, -10]

console.log(getCombinations(n, k, t, getAllSubarrays(weather)))