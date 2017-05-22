var proxy = new Proxy(target, handler);

////////////////////

var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }
});

proxy.time // 35

let obj = Object.create(proxy);
obj.time // 35

///////////////////////

let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // TypeError: Revoked

//////////////////////

const target = {
    m: function () {
        console.log(this === proxy);
    }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true

//////////////////////

let view = new Proxy({
        selected: null
    },
    {
        set: function(obj, prop, newval) {
            let oldval = obj[prop];

            if (prop === 'selected') {
                if (oldval) {
                    oldval.setAttribute('aria-selected', 'false');
                }
                if (newval) {
                    newval.setAttribute('aria-selected', 'true');
                }
            }

            // The default behavior to store the value
            obj[prop] = newval;

            // Indicate success
            return true;
        }
    });

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'