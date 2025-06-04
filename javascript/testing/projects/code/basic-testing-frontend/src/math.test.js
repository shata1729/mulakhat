// import { test, it, expect } from 'vitest';
import { add } from './math';
// test = it
it('should sum all number values in an array', () => {
    //arrange phase
    const numbers = [1, 2, 3]
    const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0)
    //act phase
    const result = add(numbers);
    // Assert phase
    expect(result).toBe(expectedResult);
});
it('should yield NaN if at least one invalid number is provided', () => {
    const numbers = ['am', 4, 5];
    const result = add(numbers);
    expect(result).toBeNaN();
});
it('should yield 0 if empty array is provided', () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
});
it('should throw an error if no value is provided', () => {
    const resultFn = () => {
        add();
    }
    expect(resultFn).toThrow(/is not iterable/);
});
it('should throw an error if array is not provided, instead multiple arguments are provided', () => {
    const num1 = 2, num2 = 3;
    const resultFn = () => {
        add(num1, num2);
    }
    expect(resultFn).toThrow(/is not iterable/);
});
