// Parameters:
//  str1: String
//  str2: String
// return type: Number

function substrIndex(str1, str2) {
    // your code here
    let index = -1;
    for (let i = 0; i < str1.length; i++) {
        let j;
        for(j=0;j<str2.length;j++){
            if(str2[j]!==str1[i+j]) break;
        }
        if(j===str2.length) return i;
    }
    return index;
}

let str1 = 'india is my country', str2 = 'my6'
console.log(substrIndex(str1, str2))


// By using the Knuth-Morris-Pratt algorithm:

// Time complexity: O(n)
// Space complexity: O(m)

function getLpsArr(str){
    let lpsArr = [...Array(str.length)].map(x => 0);
    let length = 0;
    let i = 1;
    while(i < str.length){
      if(str[i] == str[length])
        lpsArr[i++] = ++length;
      else if(length > 0)
        length = lpsArr[length-1];
      else
        lpsArr[i++] = 0;
    }
    return lpsArr;
  }
  
  function substrIndex1(str1, str2){
    let n = str1.length;
    let m = str2.length;
    if(m > n)
      return -1;
    if(m == n)
      return str2 == str1 ? 0 : -1;
    if(str2 == "")
      return 0;
    let lpsArr = getLpsArr(str2);
    let j = 0;
    let i = 0;
    while(i < n && j < m){
      if(str1[i] == str2[j]){
        i++;
        j++;
      }else if(j > 0){
        j = lpsArr[j-1];
      }else{
        i++;
      }
    }
    return j < m ? -1 : i-j;
  }
  
  
//   This code implements the Knuth-Morris-Pratt (KMP) algorithm to find the starting index of a substring (str2) within a string (str1). Here’s an explanation of how it works:

// Functions Explained:
// getLpsArr(str):

// Generates the Longest Prefix Suffix (LPS) array for the given pattern str.
// The LPS array helps avoid redundant comparisons in the main substrIndex function.
// Time complexity: 
// 𝑂
// (
// 𝑚
// )
// O(m), where 
// 𝑚
// m is the length of str.
// substrIndex(str1, str2):

// Uses the KMP algorithm to search for str2 within str1.
// It leverages the LPS array to skip unnecessary comparisons, making the search efficient.
// The function returns the index of the first occurrence of str2 in str1. If str2 is not found, it returns -1.
// Key Points:
// Time Complexity: 
// 𝑂
// (
// 𝑛
// )
// O(n) where 
// 𝑛
// n is the length of str1. The preprocessing step (LPS array) takes 
// 𝑂
// (
// 𝑚
// )
// O(m) time, and the main search runs in 
// 𝑂
// (
// 𝑛
// )
// O(n).
// Space Complexity: 
// 𝑂
// (
// 𝑚
// )
// O(m) due to the LPS array.
// The KMP algorithm is particularly useful in scenarios where multiple searches are needed, as the LPS preprocessing step is reusable.