function foo(x, y, z){
    return {x, y, z};
}


function foo(x, y, z){
    return {
        x: x,
        y: y,
        z: z
    };
}

/////////////////////////
var foo = {
    bar(){
        console.log(1);
    }
};

var foo = {
    bar: function bar() {
        console.log(1);
    }
};

//////////////////////////
var birth = '2000/01/01';

var Person = {

    name: 'J',

    // birth: birth
    birth,

    // hello: function ()...
    hello() { console.log('My name is ', this.name); }

};

////////////////////////

var foo = {
    _bar: 4,

    get bars () {
        return this._bar;
    },

    set bars (value) {
        this._bar = value;
    }
};

/////////////////////

foo['a' + 'b'] = 2;

////////////////////

let propKey = 'foo';
let bar = {
    [propKey]: 1,
    ['a' + 'b']: '1'
};

//////////////////

let baz = {
    ['h' + 'ello']() {
        return 'hi';
    }
};

baz.hello() // hi

////////////////
