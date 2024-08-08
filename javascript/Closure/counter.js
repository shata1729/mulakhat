

const counter = () => {
    let c = 0;
    return {
        increment : () => {
            return ++c;
        },
        decrement : () => {
            return --c;
        }
    
    }

}

let count = counter();
console.log(count.increment())
console.log(count.increment())
console.log(count.increment())
console.log(count.decrement())
console.log(count.decrement())