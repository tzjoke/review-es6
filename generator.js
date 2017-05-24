function* foo(){
    yield 1;
    yield 2;
}

let bar = foo();
bar.next(); // {value: 1, done: false}
bar.next(); // {value: 2, done: false}
bar.next(); // {value: undefined, done: true}

/////////////////////////////////

function* foo(){
    console.log(1);
}

let bar = foo();
bar.next();
// 1
// {value: undefined, done: true}

///////////////////////////////

function* foo(){
    yield 1;
    let x = yield 2;
    console.log(x);
}

let bar = foo();
bar.next(); // {value: 1, done: false}
bar.next(); // {value: 2, done: false}
bar.next(5);
// 5
// {value: undefined, done: true}

///////////////////////////////

function* foo(){
    console.log(`1.${yield }`);
    console.log(`2.${yield }`);
    return '0';
}

let bar = foo();
bar.next(); // {value: undefined, done: false}
bar.next(1); // 1.1 {value: undefined, done: false}
bar.next(2); // 2.2 {value: "0", done: true}


///////////////////////////////

function* foo(){
    console.log(1 + yield ); // SyntaxError
    console.log(1 + yield 1); // SyntaxError

    console.log(1 + (yield ));
    return (1 + (yield 1));
}

//////////////////////////////

let foo = {};
foo[Symbol.iterator] = function*(){
    yield 1;
    yield 2;
};

[...foo] // [1, 2]

/////////////////////////////

function* foo(){
    yield 1;
    yield 2;
    return 3;
    yield 4
}

for(let x of foo()){
    console.log(x);
}
// 1 2

[...foo()] // [1, 2]

/////////////////////////////

function* fibonacci(){
    let [pre, cur] = [0, 1];
    for(;;){
        [pre ,cur] = [cur, pre+cur];
        yield cur;
    }
}

let foo = fibonacci();
for(let x of foo){
    console.log(x);
}

/////////////////////////////

function* iterateObj(obj){
    let keys = Reflect.ownKeys(obj);

    for(let key of keys){
        yield [key, obj[key]];
    }
}

let foo = {bar: 'bar', baz: 'baz'};
for(let [k, v] of iterateObj(foo)){
    console.log(`${k}: ${v}`);
}

// bar: bar
// baz: baz

/////////////////////////////

function* iterateObj(){
    let keys = Reflect.ownKeys(this);

    for(let key of keys){
        yield [key, obj[key]];
    }
}

let bar = {foo: 'foo', baz: 'baz'};
bar[Symbol.iterator] = iterateObj;
for(let [k, v] of bar){
    console.log(`${k}: ${v}`);
}

// foo: foo
// baz: baz

/////////////////////////////

function* foo() {
    try {
        yield;
    } catch (e) {
        console.log('inner', e);
    }
};

var bar = foo();
bar.next();

try {
    bar.throw('foo');
    bar.throw('bar');
} catch (e) {
    console.log('outer', e);
}

//inner foo
//outer bar

/////////////////////////////

function* foo(){
    try{
        yield console.log(1);
    }catch(e){}
    yield 2;
    yield 3;
}

var bar = foo();
bar.next(); // 1
bar.throw(); // 2
bar.next(); // 3

/////////////////////////////

function* foo(){
    yield 1;
    yield 2;
    yield 3;
}

var bar = foo();
bar.next();  // { value: 1, done: false }
bar.return(0);  // { value: 0, done: true }
bar.next();  // { value: undefined, done: true }

/////////////////////////////

function* foo(){
    yield 1;
    yield 2;
    yield 3;
}

var bar = foo();
bar.next();  // { value: 1, done: false }
bar.return();  // { value: undefined, done: true }

/////////////////////////////

function* foo(){
    yield 1;
    try{
        yield 2;
        yield 3;
    } finally {
        yield 4;
    }
    yield 5;
}

var bar = foo();
bar.next(); //{value: 1, done: false}
bar.next(); //{value: 2, done: false}
bar.return(0); //{value: 4, done: false}
bar.next(); // {value: 0, done: true}

/////////////////////////////

function* foo() {
    yield 1;
    yield 2;
}

function* bar() {
    yield 0;
    yield* foo();
    yield 3;
}

function* bar() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

/////////////////////////////

function *foo() {
    yield 2;
    yield 3;
    return "foo";
}

function *bar() {
    yield 1;
    var v = yield *foo();
    console.log( "v: " + v );
    yield 4;
}

var it = bar();

it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}
it.next();
// "v: foo"
// {value: 4, done: false}
it.next(); // {value: undefined, done: true}

/////////////////////////////

let obj = {
    * myGeneratorMethod() {}
};

/////////////////////////////

var clock = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};


var ticking = true;
var clock = function() {
    if (ticking)
        console.log('Tick!');
    else
        console.log('Tock!');
    ticking = !ticking;
}

/////////////////////////////

function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

function* inorder(t) {
    if (t) {
        yield* inorder(t.left);
        yield t.label;
        yield* inorder(t.right);
    }
}

function make(array) {
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

var result = [];
for (let node of inorder(tree)) {
    result.push(node);
}

result
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']