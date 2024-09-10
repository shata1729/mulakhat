// You are given a string with the symbols ( and ), and you need to write a function that will determine if the parenthesis are correctly nested in the string, which means every opening ( has a closing ).

const check = (str) => {
    let counter = 0;
    
    for (let ch of str) {
        if (ch === '(') counter++;
        if (ch === ')') counter--;
        console.log(counter)
    }
    if (counter == 0) return true
    else return false
}

console.log(check('(()())'))
console.log(check('(()()()'))
