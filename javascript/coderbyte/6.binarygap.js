const solution = i => i.toString(2).split(/^0+|1+|0+$/).sort().at(-1).length

console.log(solution(''))