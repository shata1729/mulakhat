const cart = ["a", "b", "c"]

function createOrder(cart) {
    const pr = new Promise((res, rej) => {
        if (cart.length > 0) {
            return res("order is created");
        } else {
            return rej("Cart is empty");
        }
    })
    return pr
}

let order = createOrder(cart)

order
    .then(data => console.log(data))
    .catch(data => console.log(data))
    .then(()=>{
        console.log("then after catch")
    })
    .finally(()=>{
        console.log("finally")
    })