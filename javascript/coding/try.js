let timerId;
let outerDiv = document.getElementById('outerDiv');

const throttleAPICall = () => {
    let throttleCountDom = document.getElementById('throttleCount');
    let throttleCount = throttleCountDom.innerHTML || 0;
    throttleCount.innerHTML = parseInt(throttleCount) + 1;
}

const debounceAPICall = () => {
    let debounceCountDom = document.getElementById('debounceCount');
    let debounceCount = debounceCountDom.innerHTML || 0;
    debounceCount.innerHTML = parseInt(debounceCount) + 1;
}

const throttleFun = (fun, delay) => {
    if (timerId) {
        return;
    }
    let timerId = setTimeout(() => {
        fun();
        timerId = undefined;
    }, delay);
}

const debounceFun = (fun, delay) => {
    clearTimeout(timerId);
    let timerId = setTimeout(fun, delay);
}

outerDiv.addEventListener('scroll', () => {
    let apiCallCountDom = document.getElementById('throttlingCount')
    let apiCallCount = apiCallCountDom.innerHTML || 0;
    apiCallCount = parseInt(apiCallCount) + 1;
    apiCallCountDom.innerHTML = apiCallCount;

    throttleFunction(makeAPICall,300);

})