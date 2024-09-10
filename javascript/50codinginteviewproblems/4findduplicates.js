// Solve the problem [JavaScript]
// Given an array of integers arr that contains n+1 elements between 1 and n inclusive, create a function that returns the duplicate element (the element that appears more than once). Assume that:
// - There is only one duplicate number
// - The duplicate number can be repeated more than once

// Example 1:

// Input: arr = [4, 2, 1, 3, 1]

// Output: 1

// Example 2:

// Input: arr = [1, 4, 2, 2, 5, 2]

// Output: 2


// Parameters:
//  arr: Array<Number>
// return type: Number
// Time complexity: O(n)
// Space complexity: O(n)

function findDuplicate(arr){
    // your code here
    let visited = {}
    for(let num of arr){
        if(visited[num]) return num
        else visited[num]=true;
    }
    return null;
  }
console.log(findDuplicate([1,2,3,1])) 
console.log(findDuplicate([1,2,3,5,3])) 
console.log(findDuplicate([1,2,3,7])) 


// By using Floyd's cycle detection algorithm (tortoise and hare):

// Time complexity: O(n)
// Space complexity: O(1)

function findDuplicate1(arr){
    let hare = 0, tortoise = 0;
    do{
      tortoise = arr[tortoise];
      hare = arr[arr[hare]];
    }while(tortoise != hare);
    tortoise = 0;
    while(tortoise != hare){
      tortoise = arr[tortoise];
      hare = arr[hare];
    }
    return tortoise;
  }
  
  
  