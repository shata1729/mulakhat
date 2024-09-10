function steps(n) {
    for(let i=1;i<=n;i++){
        let str=[]
        for(j=0;j<i;j++){
            str.push('#')
        }
        str.join('').padEnd(n,' ')
        console.log(str.join('').padEnd(n,' '))
    }
}

steps(5)