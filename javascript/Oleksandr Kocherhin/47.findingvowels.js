const getVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((acc, el) => {
        return vowels.includes(el) ? acc + 1 : acc
    }, 0)

}

console.log(getVowels('asita'))