//array destructuring
//---
let [a, b, c] = [1,2,3];
console.log(a);// 1
console.log(b);// 2
console.log(c);// 3
//---
let [a, , c] = [1,2,3];
console.log(a);// 1
console.log(c);// 3
//---
let [a, ...rest] = [1,2,3,4];
console.log(a);// 1
console.log(rest);// [2,3,4]
//---
let [a, b, ...rest] = [1];
console.log(a);// 1
console.log(b);// undefined
console.log(rest);// []
//---
let [a, b] = [1,2,3];
console.log(a);// 1
console.log(b);// 2
//---
let [a=1, b=true] = [2, false];
console.log(a);// 2
console.log(b);// false
//---
let [a=1, b=true] = [2];
console.log(a);// 2
console.log(b);// true
//---
let [a, b=true, c=3] = [2, undefined, null];
console.log(a);// 2
console.log(b);// true
console.log(c);// null
//---
let [a=1, b=a] = [];
console.log(a);// 1
console.log(b);// 1
//---
function f() {
    console.log('x');
}

let [a = f()] = [];// x
let [b = f()] = [1];// {no output}
//---
let [a, b] = [1,3];
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
//---
function f() {
    return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
//---
//SyntaxError
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
let [a, ...b,] = [1, 2, 3];


//object destructuring
//---
let {a, b} = {a:1, b:2};
console.log(a);// 1
console.log(b);// 2
//---
let a,b;
({a, b} = {b:2, a:1});
console.log(a);// 1
console.log(b);// 2
//---
let {a} = {b: 1};
console.log(a);// undefined
//---
let {a:{b}} = {c:1};// error
//---
let {a:b} = {a:3};
console.log(b);// 3
console.log(a);//Uncaught ReferenceError: a is not defined
//---
let a = {b:1, c:2};
let {b:m, c:n} = a;
console.log(m);// 1
console.log(n);// 2
//---
let {a=1, b=2} = {a:3};
console.log(a);// 3
console.log(b);// 2
//---
let {a:b=3} = {};
console.log(b);// 3
//---
let b;
let {a: b} = {a: 1}; // SyntaxError: Duplicate declaration "b"
//---
let obj = {};
let arr = [];
({ a: obj.prop, b: arr[0] } = { a: 1, b: true });
console.log(obj); // {prop:1}
console.log(arr); // [true]
//---
let { log, sin, cos } = Math;
//---
let arr = [1, 2, 3];
let {0 : a, 2 : b} = arr;
console.log(a); // 1
console.log(b); // 3
//---
let [a,b] = 'abc';
console.log(a);// a
console.log(b);// b
//---
let {length : len} = 'hello';
console.log(len); // 5
//---
let a = 'm';
let {[a]: b} = {m: 2};
console.log(b);// 2
//---
function f([a, b]){
    return a + b;
}

f([1, 2]); // 3
//---
function f({a = 0, b = 0} = {}) {
    return [a, b];
}

f({a: 1, b: 2}); // [1, 2]
f({a: 1}); // [1, 0]
f(); // [0, 0]
//---
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// first is hello
// second is world
for (let [key] of map) {
    // ...
}

for (let [,value] of map) {
    // ...
}


