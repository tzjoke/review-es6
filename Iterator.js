for(let value of ["a", "b", "c"]){
    console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen(){
    yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a // "a"


//////////////////////////////////////

let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }
            }
        }
    }
}

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
        break;
    console.log(n);
}

////////////////////////////////////

for (var index=0; index<array.length; index++){
    console.log(array[index]);
}

array.forEach(function(val){
    console.log(val);
})

for (var index in array){
    console.log(array[index]);
}

//////////////////////////////////////

const arr = ['hello', 'world'];
arr.foo = 'bar';

for ( const val of arr ) {
    console.log( val ); // 'hello', 'world'
}

/////////////////////////////////////

const str = 'foo';

for ( const chr of str ){
    console.log(chr); //'f','o','o'
}

/////////////////////////////////////

// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
    paragraph.classList.add("read");
}

/////////////////////////////////////

const m = new Map([[1, 'hello'], [2, 'world']]);

for ( const [name, value] of m ) {
    console.log(name + "->" + value); //"1->hello", "2->world"
}

/////////////////////////////////////

let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
    console.log(value);
}
// 1
// 2
// 3

///////////////////////////////////////

function *foo() {
    yield 'bar';
    yield true;
    yield 1;
}

for (const val of foo() ) {
    console.log( val ); // 'bar', true, 1
}