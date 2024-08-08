// Promise.all
// All resolved - Will wait for all proises to finish, and produces an array of results of all promises
// Even if one fails - returns error immediately. Will not wait for others to finish.
const p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        return res("p1 success")
    }, 5000);
})
const p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        return res("p2 success")
    }, 3000);
})
const p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        return res("p3 success")
    }, 2000);
    // return rej("p3 failed")
})

// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log("result promise.all")
//     console.log(result)
// })

// Promise.allSettled([p1,p2,p3])
// .then((result)=>{
//     console.log("result promise.allSettled")
//     console.log(result)
// })

// Promise.race([p1,p2,p3])
// .then((result)=>{
//     console.log("result promise.race")
//     console.log(result)
// })

// Promise.any([p1,p2,p3])
// .then((result)=>{
//     console.log("result promise.any")
//     console.log(result)
// })
