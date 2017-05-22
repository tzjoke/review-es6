// map
var myMap = new Map();
var keyObj = {},
    keyString = "a string";

myMap.set(keyString, "a");
myMap.set(keyObj, "b");

myMap.size; // 2

myMap.get(keyString);    // "a"
myMap.get(keyObj);       // "b"
myMap.get("a string");   // "a"
myMap.get({});           // undefined, keyObj !== {}

for (var [key, value] of myMap) {
    console.log(key + " = " + value);
}

for (var key of myMap.keys()) {
    console.log(key);
}

myMap.forEach(function(value, key) {
    console.log(key + " = " + value);
}, myMap)


//set
var set = new Set('aaabb');
console.log(set);   // Set {"a","b"}

var s = new Set('123');
s.add('1').add(1).add({a:1}).add({a:1});
console.log(s);   // Set {"1", "2", "3", 1, Object {a: 1}, Object {a: 1}}


// WeakMap
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined //true


//WeakSet
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set

var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo has not been added to the set

ws.delete(window); // removes window from the set
ws.has(window);    // false, window has been removed