///////////////////////////
function foo(x, y=0) {
    return [x, y];
}
foo(1, 2); // [1, 2]
foo(1); // [1, 0]
foo(); // [undefined, 0]

//////////////////////////
function bar({x, y = 5}) {
    console.log(x, y);
}

bar({}) // undefined, 5
bar({x: 1}) // 1, 5
bar({x: 1, y: 2}) // 1, 2
bar() // TypeError: Cannot read property 'x' of undefined

//////////////////////////

let x = 99;
function foo(p = x + 1) {
    console.log(p);
}

foo() // 100

x = 100;
foo() // 101

////////////////////////

(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
(function(...args) {}).length // 0
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1

//////////////////////////

var x = 1;

function f(x, y = x) {
    console.log(y);
}

f(2) // 2

//////////////////////////////////

const x = 'outer';
function foo(a = x) {
    const x = 'inner';
    console.log(a); // outer
}

////////////////////////////////

function format(pattern, ...params) {
    return {pattern, params};
}
format(1, 2, 3);
// { pattern: 1, params: [ 2, 3 ] }
format();
// { pattern: undefined, params: [] }

//////////////////////////////////

function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}

const sortNumbers = (...numbers) => numbers.sort()

////////////////////////////////////

Math.max(-1, 5, 11, 3)
Math.max(...[-1, 5, 11, 3])
Math.max(-1, ...[-1, 5, 11], 3)
//11

console.log([1, ...[2,3], 4])
//[1, 2, 3, 4]

////////////////////////////////

function f(x, y, z) {
    // ...
}

//es5
var args = [0, 1, 2];
f.apply(null, args);
//es6
var args = [0, 1, 2];
f(...args);

//////////////////////////////////

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

//es5
Array.prototype.push.apply(arr1, arr2);
//es6
arr1.push(...arr2);

///////////////////////////////////

[...'hello']
// [ "h", "e", "l", "l", "o" ]



