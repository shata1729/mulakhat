// A positive integer N is given. The goal is to find the highest power of 2 that divides N. In other words, we have to find the maximum K for which N modulo 2^K is 0.

// For example, given integer N = 24 the answer is 3, because 2^3 = 8 is the highest power of 2 that divides N.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the highest power of 2 that divides N.

// For example, given integer N = 24, the function should return 3, as explained above.

// Assume that:

// N is an integer within the range [1..1,000,000,000].

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    // console.log(N & (~(N-1)));
    let highestDivisor = N & (~(N - 1));
    let power = 0;
    let num = highestDivisor;
    // console.log(highestDivisor)

    if (num % 2 !== 0) return 0;
    else {
        while (num > 0 && num % 2 === 0) {
            num = num / 2;
            power++;
            // console.log(num,power)
        }
        return power;
    }
}

// console.log(solution(48))
// console.log(solution(8))
// console.log(solution(4))