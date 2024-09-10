// Parameters:
//  str: String
// return type: Number

// function longestSubstringWithoutRepeating(str) {
//     // your code here
//     let maxsubstring = []
//     let visited = {}
//     let longest = 0, count = 0;
//     for (let i=0; i < str.length; i++) {
//         if (visited[str[i]]) {
//             longest = Object.keys(visited).length
//             console.log("visited")
//             console.log(longest)
//             let previousIndex = str.indexOf(str[i])
//             let arr = str.slice(previousIndex+1)
//             console.log(arr)
//         }
//         else {
//             visited[str[i]] = true;
//         }
//     }
// }

// By using two pointers technique:

// Time complexity: O(n)
// Space complexity: O(1)

function longestSubstringWithoutRepeating(str){
    let maxLength = 0;
    let start = 0;
    let indexes = [...Array(128)].map(x => -1);
    for(let i = 0; i < str.length; i++){
        if(indexes[str.charCodeAt(i)] >= start)
            start = indexes[str.charCodeAt(i)]+1;
        indexes[str.charCodeAt(i)] = i;
        maxLength = Math.max(maxLength, i-start+1);
    }
    return maxLength;
  }
  
  
  
console.log(longestSubstringWithoutRepeating('abcdebdhfjfkgk'))