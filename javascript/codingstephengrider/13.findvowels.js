function vowels(str) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];

    const countVowels = str.split('').reduce((acc, c) => {

        // Test if the current letter is a vowel
        const found = vowelsArr.includes(c);

        // If it is: if the vowel exists in the object as a key increase the count,
        // and if it doesn't set it to zero, and then increase the count
        if (found) acc = (acc) + 1;
        // return the accumulator
        return acc;
    }, 0);
    return countVowels;
}


    console.log(vowels('asita'))