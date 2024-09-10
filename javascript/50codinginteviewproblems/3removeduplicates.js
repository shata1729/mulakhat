// Given an array of integers arr, create a function that returns an array containing the values of arr without duplicates (the order doesn't matter).
// Parameters:
//  arr: Array<Number>
// return type: Array<Number>

// WARNING: Testcases aren't ready yet for this problem. Come back soon.

function removeDuplicates(arr) {
    // your code here
    let set1 = new Set(arr);
    return [...set1]
}

function removeDuplicates1(arr) {
    // your code here
    let visited = {};
    for (e of arr) {
        visited[e] = true;
    }
    return Object.keys(visited).map((k)=>parseInt(k))
}

function removeDuplicates3(arr) {
    // your code here
    return arr.reduce((acc,el)=>{
        return acc.includes(el) ? acc : [...acc, el]
    },[]);
}



let arr = [4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1];
console.log(removeDuplicates1(arr))

