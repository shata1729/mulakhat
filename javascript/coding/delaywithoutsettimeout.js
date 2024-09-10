const waitForNseconds = (fun,N) => {
    setTimeout(fun, N);

}

const func = async () => {
    let x = 10
    console.log(x)
    // Wait for 2 secs     
    waitForNseconds(()=>{
        x = 20
        console.log(x)    
    },2000)
}

func()

