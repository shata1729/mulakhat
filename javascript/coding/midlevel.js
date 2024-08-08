
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

