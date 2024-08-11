var timerThrottleId;
var timerDebounceId;
let outerDiv = document.getElementById('outerDiv');

function throttleAPICall() {
    console.log("inside throttle api")
    let throttleCountDom = document.getElementById('throttleCount');
    let throttleCount = throttleCountDom.innerHTML || 0;
    throttleCountDom.innerHTML = parseInt(throttleCount) + 1;
}

const debounceAPICall = () => {
    let debounceCountDom = document.getElementById('debounceCount');
    let debounceCount = debounceCountDom.innerHTML || 0;
    debounceCountDom.innerHTML = parseInt(debounceCount) + 1;
}

var throttleFun = function (func, delay) {
    console.log("timerThrottleId")
    console.log(timerThrottleId)
    if (timerThrottleId) {
        return                     x
    }
    timerThrottleId = setTimeout(function () {
        func()
        timerThrottleId = undefined;
    }, delay)
}

const debounceFun = (fun, delay) => {
    clearTimeout(timerDebounceId);
    timerDebounceId = setTimeout(fun, delay);
}

outerDiv.addEventListener('scroll', () => {
    let apiCallCountDom = document.getElementById('show-api-call-count')
    let apiCallCount = apiCallCountDom.innerHTML || 0;
    apiCallCount = parseInt(apiCallCount) + 1;
    apiCallCountDom.innerHTML = apiCallCount;

    throttleFun(throttleAPICall, 200);
    debounceFun(debounceAPICall, 200);

})