
// Reflect.apply(target,thisArg,args)
let foo = function(){
    this.bar = 0;
}
let obj = {};
Reflect.apply(foo, obj, []);
obj // {bar: 0}

foo.apply(obj);

// Reflect.construct(target,args)
let day = Reflect.construct(Date, [2010, 1, 1]);
let sameDay = new Date([2010, 1, 1]);


let foo = function() {
    Array.apply(this, arguments);
    this.bar = ()=> {
        //...
    }
};
let myArray = Reflect.construct(foo, []);

// Reflect.get(target,name,receiver)
let foo = {bar: 1};
Reflect.get(foo, 'bar') // 1


let obj = {
    'foo': 1,
    get bar(){
        return this.foo;
    }
};
let foo = {foo: 0};
Reflect.get(obj, 'bar', foo) // 0

// Reflect.set(target,name,value,receiver)
let foo = {};
Reflect.set(foo, 'bar', 0);
foo.bar // 0


let obj = {
    'foo': 1,
    set bar(val){
        this.foo = val;
    }
};
let foo = {foo: 0};
Reflect.set(obj, 'bar', 5, foo);
obj.foo // 1
foo.foo // 5

// Reflect.defineProperty(target,name,desc)
let foo = {};
Reflect.defineProperty(foo, 'bar', {value: 1});
Object.defineProperty(foo, 'bar', {value:1}); // {bar: 1}

Reflect.preventExtensions(foo);

Reflect.defineProperty(foo, 'bar', {value: 1}); // false
Object.defineProperty(foo, 'bar', {value:1}); // Uncaught TypeError: Cannot define property:baa, object is not extensible.

// Reflect.deleteProperty(target,name)
let foo = {bar:1};
Reflect.deleteProperty(foo, 'bar');
delete foo['bar'];

// Reflect.has(target,name)
'foo' in {foo:0}
Reflect.has({foo: 0}, 'foo') // true

// Reflect.ownKeys(target)
let sym = Symbol.for("a");
let sym2 = Symbol.for("b");
let obj = {[sym]: 0, "foo": 0,  "0": 0,
    [sym2]: 0, "-1": 0, "8": 0, "bar": 0};
Reflect.ownKeys(obj); //[ "0", "8", "foo", "-1", "bar", Symbol(a), Symbol(b) ]

Object.getOwnPropertyNames(obj) // ["0", "8", "foo", "-1", "bar"]
Object.getOwnPropertySymbols(obj) // [Symbol(a), Symbol(b)]

// Reflect.isExtensible(target)
let foo = {};
Reflect.isExtensible(foo); // true
Object.isExtensible(foo); // true

Reflect.preventExtensions(foo);
Reflect.isExtensible(foo); // false

Object.isExtensible(1) // false
Reflect.isExtensible(1) // Uncaught TypeError: Reflect.isExtensible called on non-object

// Reflect.preventExtensions(target)
Object.preventExtensions(1) // 1
Reflect.preventExtensions(1) // Uncaught TypeError: Reflect.preventExtensions called on non-object

// Reflect.getOwnPropertyDescriptor(target, name)
Reflect.getOwnPropertyDescriptor({foo: 'bar'}, 'foo');
Object.getOwnPropertyDescriptor({foo: 'bar'}, 'foo');

Reflect.getOwnPropertyDescriptor("foo",0); //Uncaught TypeError: Reflect.getOwnPropertyDescriptor called on non-object
Object.getOwnPropertyDescriptor("foo",0); // {value: "f", writable: false, enumerable: true, configurable: false}

// Reflect.getPrototypeOf(target)
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null

Object.getPrototypeOf(1) // Number {[[PrimitiveValue]]: 0}
Reflect.getPrototypeOf(1) // Uncaught TypeError: Reflect.getPrototypeOf called on non-object

// Reflect.setPrototypeOf(target, prototype)
Reflect.setPrototypeOf({}, Object.prototype); // true

Object.setPrototypeOf(1, {}) // 1
Reflect.setPrototypeOf(1, {}) // Uncaught TypeError: Reflect.setPrototypeOf called on non-object
