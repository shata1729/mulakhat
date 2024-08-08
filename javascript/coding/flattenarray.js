// let nestedArray = [1, 2, 3, [4, 5, [6, 7, [8]], 9]];
// let c=0
// while (nestedArray.some((num) => Array.isArray(num))) {
//     console.log("iteration num "+c++)
//     console.log(nestedArray)
//     nestedArray = nestedArray.reduce((acumulator, number) => {
        
//         return acumulator.concat(number);
//     }, []);
// }

// console.log(nestedArray);

// This code will flatten the array no matter how many layers deep it is, however, because we are using the some() method to ensure that the while() loop continues to execute if any of the elements within the nested array is an array, this code has a worst-case complexity of O(n^2) which makes it inefficient depending on the number of layers deep and the number of elements within the array.



// recursive soln
// const nestedArray = [1, 2, 3, [4, 5, [6, 7, [8]], 9]];

// function flattenArray(arr) {
//     let result = [];
//     arr.forEach((item) => {
//         if (Array.isArray(item)) {
//             result = result.concat(flattenArray(item));
//         } else {
//             result.push(item);
//         }
//     });
  
//     return result;
// }

// const multidimensionalArray = [
//     1, 2, 3,
//     [ [4, 5, [6, [7]]], 8],
//     [9, [0]]
// ];

// // const arrayFlattened = multidimensionalArray.flat(Infinity);
// const arrayFlattened = multidimensionalArray.flat(3);


// console.log("Array flattened:", arrayFlattened);
const fetchData = async () => {
    const response = await fetch("https://api.github.com/users/shata1729");
    const data = await response.json();
    console.log(data);
  };
  fetchData();
  