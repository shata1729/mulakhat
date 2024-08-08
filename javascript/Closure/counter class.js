
class Counter {
    constructor(c) {
        this.c = c
    }
    increment() {
        return ++this.c;
    }
    decrement() {
        return --this.c;
    }

}



let count = new Counter(0);
console.log(count.increment())
console.log(count.increment())
console.log(count.increment())
console.log(count.decrement())
console.log(count.decrement())