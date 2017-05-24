////////////////
export var foo = 1;
export var bar = 2;
export function baz(){};

////////////////
var foo = 1;
var bar = 2;
function baz(){};

export {foo, bar, baz};

////////////////
var foo = 1;
var bar = 2;

export {
    foo as foo1,
    bar as bar1
};

/////////////////
import {foo, bar} from 'my_module';

console.log(foo);

/////////////////
import {foo as foo1} from 'my_module';

console.log(foo1);

////////////////
import * as myModule from 'my_module';

console.log(myModule.foo);

////////////////
export default function baz(){};

function baz(){}
export default baz;
export {baz as default};

import baz from 'my_module';
import {default as baz} from 'my_module';

//////////////////
import _,{each} from 'lodash';