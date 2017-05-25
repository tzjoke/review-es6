let promise = new Promise((resolve, reject) => {
    if(true){
        resolve('foo');
    }else{
        reject(new Error('bar'));
    }
});

promise.then(
    value => {},
    error => {}
);

///////////////////

let promise = new Promise((resolve, reject) => {
    console.log('bar');
    resolve();
});

promise.then(() => {
    console.log('baz');
});

console.log('foo');

// bar
// foo
// baz

////////////////////

let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{console.log('bar');},0);
    resolve();
});

promise.then(() => {
    console.log('baz');
});

console.log('foo');

// foo
// baz
// bar

//////////////////

let foo = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail')), 3000)
});

let bar = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(foo), 1000)
});

bar.then(result => console.log(result))
    .catch(error => console.log(error))
// Error: fail

/////////////////////

fetch(fooURL).then(
    data => fetch(data.barURL)
).then(
    data => console.log(data),
    err => console.log(err)
);

////////////////////

let promise = new Promise((resolve, reject) => {
    throw new Error('err');
});

// or
let promise = new Promise((resolve, reject) => {
    try {
        throw new Error('err');
    } catch(e) {
        reject(e);
    }
});

// or
let promise = new Promise((resolve, reject) => {
    reject(new Error('err'));
});

promise.catch((error) => {
    console.log(error);
});
// Error: err

///////////////////////

fetch(fooURL).then(
    data => fetch(data.barURL)
).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);

//////////////////////

Promise.resolve()
    .catch(err => console.log(err))
    .then(val => console.log(val))
    .catch(err => console.log(err));

//////////////////////

let p = Promise.all([p1, p2, p3]);

p.then(([v1, v2, v3]) => {
    doSth(v1, v2, v3);
}).catch(err => console.log(err));

//////////////////////

let p = Promise.race([p1, p2, p3]);

/////////////////////

let p = Promise.race([
    fetch('/big.json'),
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('request timeout')), 5000)
    })
]);
p.then(data => console.log(data))
    .catch(error => console.log(error));

///////////////////////

Promise.resolve('foo')
// or
new Promise(resolve => resolve('foo'))

/////////////////////

Promise.reject('err');
// or
new Promise((resolve, reject) => reject('err'))

////////////////////

asyncFunc()
    .then(f1)
    .catch(r1)
    .then(f2)
    .done();

/////////////////////

Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
        .catch(function (reason) {
            setTimeout(() => { throw reason }, 0);
        });
};

//////////////////////////

server.listen(8080)
    .then(function () {

    })
    .finally(server.stop);

/////////////////////////

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

///////////////////////

function getFoo () {
    return new Promise(function (resolve, reject){
        resolve('foo');
    });
}

var g = function* () {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run (generator) {
    var it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);

/////////////////////////////

const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now

const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next

const f = () => console.log('now');
(
    () => new Promise(
        resolve => resolve(f())
    )
)();
console.log('next');
// now
// next

//////////////////////////////////

const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next

////////////////////////////////

// Promise.try(asyncFun())
// .then(...)
//     .catch(...)