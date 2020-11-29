var n = 1


function fn() {
    var n = 2

    function f() {
        n--;
        console.log(n)
    }

    f()  // 1
    return f
}

var x = fn()
x()  // 0
console.log(n)  // 1


var i = 5

function fn(i) {
    return function (n) {
        console.log(n + (++i))
    }
}

var f = fn(1)
f(2)  // 4
fn(3)(4)  // 8
fn(5)(6)  // 12
f(7)  // 10
console.log(i)  // 5

