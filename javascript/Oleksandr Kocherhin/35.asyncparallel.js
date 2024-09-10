// Execute the given list of asynchronous functions in parallel and return the results as an array to the callback
const asyncFunc1 = (callback) => {
    setTimeout(() => {
        callback(1);
    }, 3000);
};

const asyncFunc2 = (callback) => {
    setTimeout(() => {
        callback(2);
    }, 2000);
};

const asyncFunc3 = (callback) => {
    setTimeout(() => {
        callback(3);
    }, 1000);
};

const asyncParallel = (asyncFuncs, callback) => {
    const resultArr = new Array(asyncFuncs.length);
    let resultCounter = 0;

    asyncFuncs.forEach((asyncFunc, index) => {
        asyncFunc((value)=>{
            resultArr[index] = value;
            resultCounter++;
            if(resultCounter >= asyncFuncs.length){
                callback(resultArr)
            }
        })      
    });
}


asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
    console.log(result); // 1, 2, 3 (prints results of each asynchronous function in order)

});


// function getInParallel(apiCalls) {
//     // Write your code here
//     let functions = apiCalls.map(apiCall => apiCall())
//     return Promise.all(functions).then(res => res)
//   }
  
//   let promise = getInParallel([() => Promise.resolve("First API call!"),
//                                () => Promise.resolve("Second API call!")]);
//   if(promise) {
//     promise.then((result) => console.log(result)).catch((err) => console.log(err));
//   }
//   module.exports.getInParallel = getInParallel;