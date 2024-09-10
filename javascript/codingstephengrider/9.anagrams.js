const getCharCount = (str) => {
    let visitedA = {};
    for (let ch of str) {
        if (visitedA[ch] >= 1) {
            visitedA[ch] += 1;
        } else {
            visitedA[ch] = 1;
        }
    }
    return visitedA;
}
function anagrams(stringA, stringB) {
    let visitedA = getCharCount(stringA);
    let visitedB = getCharCount(stringB);
    let visitedAarr = Object.entries(visitedA);
    let visitedBarr = Object.entries(visitedB);
    if (visitedAarr.length !== visitedBarr.length) return false;
    for (let i = 0; i < visitedAarr.length; i++) {
        let ch = visitedAarr[i][0];
        let count = visitedAarr[i][1];
        if (visitedB[ch] !== count) {
            return false
        }
    }
    return true;
}
console.log(anagrams('hello7', 'lloeh6'));