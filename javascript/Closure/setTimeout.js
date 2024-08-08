
function list1() {
    console.log("list1")
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 500);
    }
}

list1()         //prints 5 5 5 5 5

function list2() {
    console.log("list2")
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 500);
    }
}

list2()

// print count using var only
function list3() {
    console.log("list3")
    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(() => {
                console.log(i)
            }, 500);
        })(i);
    }
}

list3()