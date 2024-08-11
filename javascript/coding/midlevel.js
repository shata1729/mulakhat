
/*
// Ex1
const promise1 = Promise.resolve("One");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const promise3 = Promise.reject("Three");
console.log("start")
 Promise.allSettled([promise1, promise2, promise3])
 .then((results) => console.log(results));
*/
//  OUTPUT:
//  [
//     {
//         "status": "fulfilled",
//         "value": "One"
//     },
//     {
//         "status": "fulfilled",
//         "value": "Two"
//     },
//     {
//         "status": "rejected",
//         "reason": "Three"
//     }
// ]
// ================================================================================================================================
// Ex2
// Develop a simple URL shortener service using JavaScript. Implement a function that takes a long URL as an input parameter and the output will be a shortened URL. Create a reverse function as well. The reverse function takes the shortened URL and returns the original long URL. You can use simple in-memory objects to store the mapping between long and short URLs.

// const crypto = require('crypto');

// const longUrl = "http://sadjsdsdjjdd.com?jasdnjdj=sdjasjdsd&dasdjsddsjdsjd=jdjdjdfjdsdsjdsj"
// let urlMap = new Map();

// const shortenedUrl = (longUrl) => {
//     const secret = "i am a secret"
//     const hash = crypto.createHash('sha256', secret)
//         // updating data
//         .update(longUrl)
//         // Encoding to be used
//         .digest('hex');

//     urlMap.set(hash, longUrl);
//     return hash;
// }

// const getOriginalUrl = (hash) => {
//     return urlMap.get(hash)
// }

// const shortUrl = shortenedUrl(longUrl)
// console.log("shortUrl")
// console.log(shortUrl)
// const originalUrl = getOriginalUrl(shortUrl)
// console.log("originalUrl")
// console.log(originalUrl)
// ================================================================================================================================

// Ex 3
// Implement an autocomplete feature for a search input field. Given an array of words, write a function that suggests words based on the current input. The output of the function will be an array of suggested words that start with the input characters, limiting the number of suggestions (e.g., a maximum of 7 suggestions).

// let words = ['akshay','asita','amey','akash','abhishek','amit','amruta','amrut','aliya']

// const getSuggestions = (searchString) => {
//     let suggestions = words.filter((word)=>{
//         return word.startsWith(searchString)
//     })
//     suggestions = suggestions.slice(0,7)
//     console.log(suggestions)
//     return suggestions;
// }

// getSuggestions('a')

// ================================================================================================================================
// Ex 5
// const obj = {
//     name: "Conner",
//     age: 27,
//     greet: () => {
//       console.log(`Hey, my name is ${this.name}`);
//     },
//   };
//   obj.greet();

//   OUTPUT:
//   HTMLBodyElement, my name is 
// ================================================================================================================================
// Ex 6
// const object1 = {
//     prop1: "value1",
//     prop2: {
//       prop3: "value3",
//     },
//   };
//    const newObj = { ...object1 };
//   newObj.prop2.prop3 = "newValue3";
//   console.log(object1.prop2.prop3);

//   OUTPUT:
//   newValue3 
// ================================================================================================================================
// Ex7
// class Bird {
//     constructor(name) {
//       this.name = name;
//     }
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
//    class Crow extends Bird{
//     speak() {
//       super.speak();
//       console.log(`${this.name} sings.`);
//     }
//   }
//    const crow = new Crow("Tim");
//   crow.speak();

//   OUTPUT:
//   Tim makes a noise.
//   Tim sings.
// ================================================================================================================================
// Ex8
// Develop a function that throttles another function, allowing it to be called at most once every specified interval (e.g., 300ms). The throttling function will have two input parameters. One will be the function to be throttled and the second will be the interval in milliseconds. The throttled function should be called with the same arguments as the original function.

// Ex9
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((total, num) => total + num);
// console.log(sum / arr.length);

// OUTPUT:
// 3

// Ex10
// Design a simple meeting scheduler that finds the first available time slot for a meeting between two people. Given two arrays of busy time intervals and a meeting duration, create a function that returns the earliest available time slot for the meeting when both people will be available. Each interval is represented as an array of two integers, where the first integer is the start time and the second integer is the end time
// Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, return the earliest time slot that works for both of them and is of duration duration.

// If there is no common time slot that satisfies the requirements, return an empty array.

// The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.  

// It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.

// Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
// Output: [60,68]
// Example 2:

// Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12
// Output: []

let slots1 = [[10, 50], [60, 120], [140, 210]], slots2 = [[0, 15], [60, 70]], duration = 8;
// let slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12;


// Ex11
// Is there any security vulnerability in the below code? If yes, identify it:

// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;
// fetch('https://api.examplewebsite.com/login', {
//   method: 'POST',
//   body: JSON.stringify({ username, password })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Ex12
// const testArray = [1, 2, 3, 4, 5];
// const res = testArray.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
// 	return acc + curr;
//   }
//   return acc;
// }, 0);
// console.log(res);

// OUTPUT: 6

// Ex13
// What is the possible performance issue in the below code ?

// const arr = [];
// for (let i = 0; i < 1000000; i++) {
//     arr.push(Math.floor(Math.random() * 1000));
// }
// console.log(arr)

// Ex15
// Suggest the output of the below code:

// const arr = [1, 2, 3];
// const object1 = { x: 1, y: 2, z: 3 };
// console.log(...arr);
// console.log(...Object.entries(object1));
// console.log([...object1]);
// console.log(...arr);

// OUTPUT:
// 1 2 3
// Spread syntax requires ...iterable[Symbol.iterator] to be a function

// Ex16
// What is wrong with the below call to the API?

fetch('https://api.github.com/user/shata1729')
  .then(response => {
	if (!response.ok) {
  	throw new Error('Network response was not ok');
	}
	return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));
