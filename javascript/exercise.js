/*

// =========================================
var i = 20
function fn() {
    i -= 2
    return function (n) {
        console.log((++i) - n)
    }
}

var f = fn()  // i = 18
f(1)        // 18   i = 19
f(2)        // 18   i = 20  仅执行 ++i
fn()(3)     // 16   i = 19
fn()(4)     // 14   i = 18
f(5)        // 14   i = 19
console.log(i)  // i = 19

// =========================================

console.log(a)  // undefined
var a = 12

function fn() {
    console.log(a)  // undefined
    var a = 13
}

fn()
console.log(a)  // 12

// =========================================

console.log(a)  // undefined
var a = 12

function fn() {
    console.log(a)  // 12
    a = 13
}

fn()
console.log(a)  // 13

// =========================================

console.log(a)  // a is not defined
a = 12

function fn() {
    console.log(a)
    a = 13
}

fn()
console.log(a)

// =========================================

var foo = 1

function bar() {
    if (!foo) {
        var foo = 10
    }
    console.log(foo)  // 10
}

bar()

// =========================================

let foo = 1

function bar() {
    if (!foo) {
        let foo = 10
    }
    console.log(foo)  // 1
}

bar()

// =========================================


var n = 0

function a() {
    var n = 10

    function b() {
        n++
        console.log(n)  // 11
    }

    b()
    return b
}

var c = a()
c()  // 12
console.log(n)  // 0

// =========================================

var a = 10, b = 11, c = 12
function test(a) {
    a = 1
    var b = 2
    c = 3
}

test(10)
console.log(a)  // 10
console.log(b)  // 11
console.log(c)  // 3

// =========================================

if (!('a' in window)) {
    var a = 1
}
console.log(a)  // undefined

// =========================================

var a = 4

function b(x, y, a) {
    console.log(a)  // 3
    arguments[2] = 10
    console.log(a)  // 10
}

a = b(1, 2, 3)
console.log(a)  // undefined

// =========================================

"use strict"

var a = 4

function b(x, y, a) {
    console.log(a)  // 3
    arguments[2] = 10
    console.log(a)  // 3
}

a = b(1, 2, 3)
console.log(a)  // undefined

// =========================================

var foo = 'hello'

~function (foo) {
    console.log(foo)  // hello
    var foo = foo || 'world'  // hello
    console.log(foo)
}(foo);

console.log(foo)  // hello

// =========================================

var a = 9

function fn() {
    a = 0
    return function (b) {
        return b + a++
    }
}
var f = fn()
console.log(f(5))  // 5  a = 1
console.log(fn()(5))  // 5 a = 1
console.log(f(5))  // 6 a = 2
console.log(a)  // 2

// =========================================

function fn(i) {
    return function (n) {
        console.log(n + (i++))
    }
}

var f = fn(10)
f(20)  // 30
fn(20)(40)  // 60
fn(30)(50)  // 80
f(30)  // 41

// =========================================

var i = 10
function fn() {
    return function (n) {
        console.log(n + (++i))
    }
}
var f = fn()
f(20)  // 31 i = 11
fn()(20)  // 32 i = 12
fn()(30)  // 43
f(30)  // 44

// =========================================

var arr = [1, 2, 3, 4]
function fn(arr) {
    arr[0] = 0
    arr = [0]
    arr[0] = 100
    return arr
}
var res = fn(arr)
console.log(arr)  // [0, 2, 3, 4]
console.log(res)  // [100]

// =========================================

var test = (function (i) {
    return function () {
        alert(i *= 2)
    }
})(2)
test(5)  // 4

// =========================================

var a = 1
var obj = {
    "name": "tom"
}

function fn() {
    var a2 = a
    obj2 = obj
    a2 = a
    obj2.name = "jack"
}

fn()
console.log(a)  // 1
console.log(obj)  // { "name": "jack" }

// =========================================

var a = 1
function fn(a) {
    console.log(a)  // [Function: a]
    var a = 2
    function a() {}
    console.log(a) // 2
}
fn(a)

// =========================================

var a = 0, b = 0

function A(a) {
    A = function (b) {
        alert(a + b++)  // 4  该函数在A(1)这个函数中创建，变量往上级作用域中查找，a的值为A(1)中的a
    }
    alert(a++)  // 1
}

A(1)
A(2)

// =========================================


var fullName = 'language'
var obj = {
   fullName: 'javascript',
   prop: {
       getFullName: function () {
           return this.fullName
       }
   }
}
console.log(obj.prop.getFullName())  // undefined
var test = obj.prop.getFullName
console.log(test())  // language

// =========================================

window.val = 1
var json = {
    val: 10,
    dbl: function () {
        this.val *= 2
    }
}

json.dbl()  // json.dbl = 20
var dbl = json.dbl
dbl()  // window.dbl = 2
json.dbl.call(window) // window.dbl = 4
alert(window.val + json.val)

// =========================================

var num = 10
var obj = {num: 20}
obj.fn = (function (num) {
    this.num = num * 3
    num++
    return function (n) {
        this.num += n
        num++
        console.log(num)  // 22 23
    }
})(obj.num)
var fn = obj.fn
fn(5)
obj.fn(10)
console.log(num, obj.num)  // 65 30

// =========================================
*/

