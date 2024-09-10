// Home
// 50 popular coding interview problems
// Solve the problem [JavaScript]
// Given a string str, create a function that returns the first repeating character.
// If such character doesn't exist, return the null character '\0'.

// Example 1:

// Input: str = "inside code"

// Output: 'i'

// Example 2:

// Input: str = "programming"

// Output: 'r'

// Example 3:

// Input: str = "abcd"

// Output: '\0'

// Example 4:

// Input: str = "abba"

// Output: 'b'

// Parameters:
//  str: String
// return type: Character

// By using a dictionary:

// Time complexity: O(n)
// Space complexity: O(n)


function firstRepeatingCharacter(str) {
    let visited = {};
    for (ch of str) {
        if (visited[ch]) return ch;
        else visited[ch] = true;
    }
    return '\0';
}

console.log(firstRepeatingCharacter('missisipi'))