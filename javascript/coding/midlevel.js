
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

// Ex2
// Develop a simple URL shortener service using JavaScript. Implement a function that takes a long URL as an input parameter and the output will be a shortened URL. Create a reverse function as well. The reverse function takes the shortened URL and returns the original long URL. You can use simple in-memory objects to store the mapping between long and short URLs.

const longUrl = "http://sadjsdsdjjdd.com?jasdnjdj=sdjasjdsd&dasdjsddsjdsjd=jdjdjdfjdsdsjdsj"
let urlMap = new Map();

