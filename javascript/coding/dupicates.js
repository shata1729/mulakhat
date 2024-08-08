const obj = [
    {key : "s1", value:"d1"},
    {key : "s1", value:"d1"},
    {key : "s1", value:"d1"},
    {key : "s2", value:"d2"},
    {key : "s3", value:"d3"},
    {key : "s5", value:"d5"},
]

let output = {}
obj.forEach(e => {
    if(output[e.key]){
        output[e.key].push(e)
    } else {
        output[e.key] = [e];
    }
});

console.log(output)