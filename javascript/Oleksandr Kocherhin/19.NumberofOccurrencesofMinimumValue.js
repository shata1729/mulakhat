let arr = [1,2,3,1,4,5,6,7,7,1];

const minValue = Math.min(...arr);

const minArray = arr.filter(el => el === minValue)
console.log(minArray.length)