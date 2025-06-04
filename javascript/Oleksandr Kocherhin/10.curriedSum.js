// function curry(fn) {
//     let arity = fn.length;
//     console.log("arity", arity)
//     return function (...args) {
//         console.log("f1", args);
//         if(args.length >= arity){
//             console.log("enough args")
//         }
//     }
// }

// const curriedSum = curry((a, b, c) => a + b + c);
// curriedSum(1,2,3)
// const privateCounter = () => {
//     let count = 0;

//     return {
//         increment: (val = 1) => {
//             count += val;
//         },
//         getValue: () => {
//             return count;
//         }
//     }
// }

// const counter = privateCounter();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());

//infinite currying
// let sum = function(a){
//     return function(b){
//         if(b) return sum(a+b);
//             else return a;
//     }
// }

// console.log(sum(3)(5)(6)(7)())

// conerting any function to its curried version
function curryFunction(func) {

    return function curriedFunction(...args) {
        if (args.length >= func.length) {
            return func.call(this, ...args);
        }
        return function (..._args) {
            return curriedFunction.call(this, ...args, ..._args);
        }
    }
}

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

// console.log(add(1,2,3,4))

const curriedAdd = curryFunction(add);
const sum = curriedAdd(1)(2);
console.log(sum(2));