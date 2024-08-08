const data = [
    { firstName: "aa", lastName: "aa", score:30},
    { firstName: "zz", lastName: "zz", score:20},
    { firstName: "bb", lastName: "bb", score:50},
]

// map

let fullNames = data.map((record) => {
    return record.firstName+' '+record.lastName;
})

console.log(fullNames)

// filter
let filteredNames = data.filter((record)=>{
    return record.score>20
})

console.log(filteredNames)

//reduce
let totalscore = data.reduce((acc,cur)=>{
    return acc+cur.score
},0)

console.log(totalscore)