var sym0 = Symbol();
var sym1 = Symbol("symbol1");
var sym2 = Symbol("symbol2");
var sym3 = Symbol("symbol2");

typeof sym0 === 'symbol'
typeof sym1 === 'symbol'
typeof Symbol.iterator === 'symbol'

sym0.toString(); //"Symbol()"
sym1.toString(); //"Symbol(symbol1)"


//////////////////////

var obj = {
    toString() {
        return 'symbol';
    }
};
var sym = Symbol(obj);
sym // Symbol(symbol)


//////////////////////
var s1 = Symbol();
var s2 = Symbol();

s1 === s2 // false

var s1 = Symbol('foo');
var s2 = Symbol('foo');

s1 === s2 // false

///////////////////////

var sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
    `your symbol is ${sym}`
// TypeError: can't convert symbol to string

///////////////////////

var a = {};
a[sym0] = 'foo';

var b = {
    [sym0]: 'foo'
};

var c = {};
Object.defineProperty(c, sym0, { value: 'foo' });

/////////////////////

log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
log(log.levels.DEBUG, 'debug message');
log(log.levels.INFO, 'info message');

//////////////////////

var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
    console.log(i); // logs "c" and "d"
}

Object.getOwnPropertySymbols(obj);//[Symbol(a), Symbol(b)]

Reflect.ownKeys(obj); //["a" ,"b" ,Symbol(a), Symbol(b) ]

///////////////////////////

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

s1 === s2 // true


//////////////////////////

var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined

