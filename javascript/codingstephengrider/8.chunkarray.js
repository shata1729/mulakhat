function chunk(array, size) {
    if (size <= 0) return array;
    let chunks = [];
    for (let i = 0; i < array.length; i = i++) {
        chunks.push(array.splice(i, size));
    }
    return chunks;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));