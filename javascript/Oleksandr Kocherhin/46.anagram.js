const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    let str1Lower = str1.toLowerCase();
    let str2Lower = str2.toLowerCase();
    console.log(str1Lower);
    console.log(str2Lower);
    let visited1 = getCharCount(str1Lower);
    let visited2 = getCharCount(str2Lower);

    console.log(visited1);
    console.log(visited2);
}

const getCharCount = (str) => {
    let visited = [];
    for (let ch of str.split('')) {
        console.log(typeof ch)
        if (visited[ch] >= 1) {
            visited[ch] += 1;
        } else {
            visited[ch] = 1;
        }
    }
    return visited;
}

console.log(isAnagram("234", "234"))