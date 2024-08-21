// What is the difference between null and undefined?
// typeof null -> object
// typeof undefined -> undefined

// What is undefined in JavaScript?
// undefined itself is a data typeof
// null is a primitive data type

// What will be the output of undefined==null and undefined===null? Why?
// true ānd false

// Can you explicitly assign ‘undefined’ to a variable?
// yes

// let i=undefined; [show example]

// What is the difference between function scope and block scope?
// ES5 has function scope but ES6 has block scope

// What is hoisting in JavaScript?

// How does block scope work?

// What is the scope of a variable?

// What is automatic semicolon insertion (ASI)?

// Should you terminate all lines by a “;”?

// function test(){

//            return

//            {

//                 a:5

//            }

// }

// const obj=test();

// console.log(obj);

// Why this code is returning undefined in spite of function returning a valid object literal?

// Can ‘use strict’ statement or the strict mode change the behaviour of ASI?



// Explain the difference between Rest and Spread?

// Can we use arguments object in arrow function?

// Which is the best way to create new arrays with assignment?

// How can you handle the “n” number of parameters passed to a function ? or create a function which can take any number of parameters and returns sum or max or any other such calculative values.

// Can the rest operator be placed anywhere in the function parameter list? Or

// function test(...a,b){

// //statements

// }

// Is this piece of code valid? Give the reason.



// When do you get Infinity or -Infinity as output?
// number is 64 bit
// console.log(9e400)
// console.log(Number.MAX_VALUE*2)

// How will you put a validation for positive or negative Infinity?
// if(num == Number.POSITIVE_INFINITY){
// }

// What will be the output of this code?

// Code:

// console.log(1/0); //Infinity



// When do you get NaN as output?
// console.log(5*"6")
// console.log("5"*"6")
// console.log(5*"a") // NaN

// What will be the output of the below statement?

// console.log(NaN==NaN); //false hence if(a==NaN) is bad
// instead use isNaN
// a=8
// isNaN(a)?console.log("not a num"):console.log("is a num")

// What is the difference between isNaN() and isFinite() method?
// isFinite checks for NaN as well as Infinity values


// Explain must know points of arrow function.
// function test(){
//     console.log(...arguments)
// }
// test(4,5)

// const test1 = (...arguments)=>{
//     console.log(...arguments)
// }
// test1(4,5)

// Explain the syntactical features of arrow function.

// Why “this” does not work in arrow function?

// Explain output of following code with reason.

// const obj={

//      method:()=>{

//                        console.log(this);

//      }

// }

// How can you handle arguments object like functionality in arrow function?

// Can you write IIFE with arrow function syntax?

// (()=>{
//     console.log("hello")
// })();

// How does closure work in JavaScript ?

// How can you access private variable or function outside the scope?

// Explain the advantage of closure?



// How can sum(5)(6) return 11?
// const sum = (a)=>{
//     return function(b){
//         return a+""+b;
//     }
// }
// let y = sum(3)
// console.log(y(5))
// console.log(sum(3)(5))
// What is function currying?
// currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved
// const multiplication=a=>b=>c=>return a*b*c - What will this statement do? Explain in detail.

// Explain practical usage of function currying.



// Iterables and Iterators

// What is the purpose of the iterator?

// How do you create an iterator?
// You put a method inside the object which returns an interable object
let obj = {
    start: 10,
    end: 15
}
obj[Symbol.iterator] = function () {
    const itr = {
        next() {
            if (obj.start <= obj.end) {
                return { value: obj.start++, done: false }
            } else {
                return { done: true }
            }
        }
    }
    return itr;
}

for(let i of obj){
    console.log(i)
}
// Explain a practical use of an iterator?
// for making custom data structure iterable


// Generators

// What are generator functions? Explain the syntax.
// A generator function is a special type of function in JavaScript that allows pausing and resuming its execution during runtime. Unlike regular functions, which run to completion, generator functions can be paused and resumed multiple times, making them particularly useful for dealing with asynchronous operations, handling large datasets, and writing custom iterators.

// Generator functions are defined using the function* syntax, and they use the yield keyword to pause the function's execution and produce a value. When a generator function is called, it returns an iterator object, which can be used to control the function's execution.

// Which is the right syntax function* () { } or function *() {}?

// Explain all methods of generator objects.

// Explain the use of “yield*”

// Can you prevent return() from terminating the generator?



// Memory Management and Garbage Collection

// How does GC work in JS?

// Explain “Mark-and-Sweep” algorithm’s pattern

// Which situation can create a memory leak?



// How do you handle errors in JavaScript code?

// When do you need try...catch ?

// How can you generate an error ?

// Can you generate SyntaxError or ReferenceError kind of errors ?

// What is the purpose of the finally block ?

// How can you refer to the name or description of error ?

// Can we have finally without a catch block as well ?