{
    let a = 10;
    var b = 1;
}

a // ReferenceError: a is not defined.
b // 1

///////////////////////

let me = 'go';  // globally scoped
var i = 'able'; // globally scoped

console.log(window.me); // undefined
console.log(window.i); // 'able'

///////////////////////

x = y = "global";
(function() {
    x; // undefined
    y; // Reference error: y is not defined

    var x = "local";
    let y = "local";
}());


///////////////////////

if (true) {
    // TDZ start
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ end
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}


///////////////////////

// error
function f() {
    let a = 10;
    var a = 1;
}

// error
function f() {
    let a = 10;
    let a = 1;
}

function func(arg) {
    let arg; // error
}

function func(arg) {
    {
        let arg; // no error
    }
}


///////////////////////

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}