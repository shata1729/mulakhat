const p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        return res("p1 success")
    }, 2000);
})
const p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        return res("p2 success")
    }, 1000);
})

const fun = async ()=> {
    let p1result = await p1;
    console.log(p1result)
    let p2result = await p2;
    console.log(p2result)
}

fun();