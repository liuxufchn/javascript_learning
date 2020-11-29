/**
 * 变量提升：JavaScript在执行任何代码段之前，把当前作用域中所有带var/function关键字的进行提前的声明和定义
 */

// 函数和变量相比，会被优先提升。这意味着函数会被提升到更靠前的位置。
// 变量提升：可以在声明一个函数之前使用该函数
console.log(sum(1, 2))  // 3

function sum(num1, num2) {
    return num1 + num2
}

// JavaScript只会提升声明，不会提升其初始化。如果一个变量先被使用再被声明和赋值的话，使用时的值是 undefined。
console.log(num)

var num = 10  // undefined

// JavaScript在执行任何**代码段**之前，进行变量提升
console.log(fn)
// fn()  // Uncaught TypeError: fn is not a function
if ('fn' in window) {
    // 执行该代码段之前，先进行变量提升
    fn()  // 'fn'
    function fn() {
        console.log('fn')
    }
}
fn()

console.log(a, b)  // undefined undefined
var a = 12, b = 12

function fn() {
    console.log(a, b)  // undefined 12
    var a = b = 13
    console.log(a, b)  // 13 13
}

fn()
console.log(a, b)  // 12 13

