function longestPalindrome(str) {
    // your code here
    let visited = {}
    for (let i = 0; i < str.length; i++) {
        if (visited[str[i]] >= 1) {
            visited[str[i]] = visited[str[i]] + 1;
        } else {
            visited[str[i]] = 1;
        }
    }
    let longest = 0;
    let containsOdd = false;
    Object.entries(visited).forEach((key) => {
        console.log(key)
        if (key[1] % 2 == 0) {
            longest = longest + key[1];
        } else {
            longest = longest + key[1] - 1;
            containsOdd = true;
        }
    });
    if (containsOdd) return longest + 1;
    else return longest;
}

console.log(longestPalindrome("abbaba"));

// Time complexity: O(n)
// Space complexity: O(1)

function longestPalindrome1(str){
    let occurrences =  [...Array(128)].map(x => 0);
    for(const letter of str.split("")){
      occurrences[letter.charCodeAt(0)]++;
    }
    let length = 0;
    for(const occu of occurrences){
      length += occu % 2 == 0 ? occu : occu - 1;
    }
    if(length < str.length) length++;
    return length;
  }