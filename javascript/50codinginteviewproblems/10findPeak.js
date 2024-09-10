function findPeak(arr) {
    // your code here
    let peaks = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.length == 1) {
            peaks.push(0)
        } else if (i == 0 && arr[i] >= arr[i + 1]) {
            peaks.push(i)
        } else if (i == arr.length - 1 && arr[i] >= arr[i - 1]) {
            peaks.push(i)
        } else if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            peaks.push(i)
        }
    }
    return peaks;
}

console.log(findPeak([3, 2, 5, 6, 4, 8, 5]))
console.log(findPeak([-3, -1, 9, 10, 10]))
console.log(findPeak([3]))


// By using divide and conquer (recursively):

// Time complexity: O(logn)
// Space complexity: O(1)

function findPeak1(arr, left = 0, right = arr.length-1){
    if(left >= right) return left;
    let mid = Math.floor((left + right)/2);
    if(arr[mid] < arr[mid+1])
      return findPeak(arr, mid+1, right);
    else
      return findPeak(arr, left, mid);
  }
  
  
  