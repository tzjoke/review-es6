// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});

// Lexical this
var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}

/////////////////////

var Message = (text) => {
    this.text = text;
};
// Throws "TypeError: Message is not a constructor"
var helloMessage = new Message('Hello World!');

////////////////////

let callback;

callback = callback || function() {}; // ok
callback = callback || () => {};      // SyntaxError: invalid arrow-function.js arguments
callback = callback || (() => {});    // ok

///////////////////

setTimeout( _ => {
    console.log("I happen sooner");
    setTimeout( _ => {
        // deeper code
        console.log("I happen later");
    }, 1);
}, 1);

////////////////////

var arguments = 42;
var arr = () => arguments;

arr(); // 42

function foo() {
    var f = () => arguments[0]; // foo's implicit arguments binding
    return f(2);
}

foo(1); // 1


///////////////////////

function foo() {
    var f = (...args) => args[0];
    return f(2);
}

foo(1); // 2


////////////////////////

function Timer() {
    this.s1 = 0;
    this.s2 = 0;

    setInterval(() => this.s1++, 1000);

    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

///////////////////////

'use strict';

function Timer() {
    var _this = this;

    this.s1 = 0;
    this.s2 = 0;

    setInterval(function () {
        return _this.s1++;
    }, 1000);

    setInterval(function () {
        this.s2++;
    }, 1000);
}

/////////////////////

var adder = {
    base : 1,

    add : function(a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function(a) {
        var f = v => v + this.base;
        var b = {
            base : 2
        };

        return f.call(b, a);
    }
};

console.log(adder.add(1));         // 2
console.log(adder.addThruCall(1)); // 2

///////////////////////


function MyCat(name) {
    this.catName = name;
}
MyCat.prototype.sayCatName = () => {
    console.log(this === window); // => true
    return this.catName;
};
var cat = new MyCat('Mew');
cat.sayCatName(); // => undefined

/////////////////////////////////


var calculate = {
    array: [1, 2, 3],
    sum: () => {
        console.log(this === window); // => true
        return this.array.reduce((result, item) => result + item);
    }
};
console.log(this === window); // => true
// Throws "TypeError: Cannot read property 'reduce' of undefined"
calculate.sum();

/////////////////////////

document.addEventListener('click', () => {
    this.innerHTML = '123';
});

var init = function() {
    document.addEventListener('click',
        event => this.innerHTML = '123', false);
};

///////////////////////

document.addEventListener('click', function () {
    undefined.innerHTML = '123';
});

var init = function init() {
    var _this = this;

    document.addEventListener('click', function (event) {
        return _this.innerHTML = '123';
    }, false);
};
