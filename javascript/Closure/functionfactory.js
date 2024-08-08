const multiplier = (num) => {
    return function (i){
        num * i;
    }
}
let double = multiplier(2)
console.log(double(5))

