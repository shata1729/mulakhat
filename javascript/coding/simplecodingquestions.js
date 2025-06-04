/*
//reversing string
let str = "hello world how are you";

let ans = str.split(" ").reverse().join(" ");

console.log(ans)
*/
/*
function checkArray(arr) {
    retuarn Array.isArray(arr);
}

console.log(checkArray([]))
console.log(checkArray({}))
*/
/*
// how to empty array. do not pop element or assign []
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
*/

/*
// Check if integer or not
let n = 10;
// Number.isInteger(n)
if(n%1 === n){
    console.log("integer")
} else {
    console.log("not an integer")
 }
*/
/*
//duplicate array elements
let arr = [1, 2, 3]
let dupl = [...arr, ...arr]
console.log(dupl)
console.log(arr.concat(arr))
*/
/*
//reverse a no
let n = 1234;
let reverse = Number(n.toString().split("").reverse().join(''));
console.log(reverse)
*/
/*
// Sort string in alphabetical order
function sort(str) {
    return str.split("").sort().join('')
}

console.log(sort('zabcacx'));
*/
/*
// Capitalize first letter of each word
function initCapitalize(str) {
    return str.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
        .join(" ")
}
console.log(initCapitalize("hello world how are you"))
*/
/*
//number of occurrences of each letter in a string
let str = 'hello world how are you'
let visited = {}

for (let ch of str.split('')) {
    if (visited[ch] > 0) {
        visited[ch]++;
    } else {
        visited[ch] = 1;
    }
}
console.log(visited)

let occurrences = {}
str.split("").forEach((ch) => {
    if (occurrences.hasOwnProperty(ch) === false) {
        occurrences[ch] = 1;
    } else {
        occurrences[ch]++;
    }
})
console.log(occurrences)
*/
/*
// getting sum of array
let arr = [1, 2, 3, 4, 'hello']

let sum = arr.reduce((acc, e) => {
    if (typeof e === 'number') return (e + acc)
    else return acc
}, 0)
console.log(sum);
*/
/*
//remove all females
let persons = [{ name: "shata", gender: "male" }, { name: "asita", gender: "female" }, { name: "sahir", gender: "male" }, { name: "amey", gender: "male" }];
let men = persons.filter(p => p.gender === "male");
console.log(men)
*/

//clone an array
/*
const cloneArr = (arr) => {
    return arr.map(e => e)
}
let arr = [1, 2, 3, 4]
let newArr = cloneArr(arr);
console.log(newArr)
newArr.pop()
console.log(newArr)
console.log(arr)
*/
/*
// get type

const getType(e){
    return typeof e
}
*/
/*
// find char with highest frequency
let str = "hello world how are you? i hope all ok"
let occurrences = {}
str.split("").forEach((ch) => {
    if (ch.match(/[a-z]/i)) {
        if (occurrences.hasOwnProperty(ch) === false) {
            occurrences[ch] = 1;
        } else {
            occurrences[ch]++;
        }
    }
})

let max = Object.keys(occurrences).reduce((a, b) => occurrences[a] > occurrences[b] ? a : b);

console.log(max, occurrences[max])
*/
/*
// Randomize
const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
console.log(shuffle([1, 2, 3, 4, 5, 6]))
*/
/*
// union of 2 arrays
function union(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

console.log(union([2, 1, 3, 4, 5, 6], [4, 5, 6, 7]));
*/
