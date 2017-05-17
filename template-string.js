//------
`string text`
    
`text line1
 text line2`
    
`\`hi\``


//------
let name = 'Jim';
`hello ${name}`


//------
let a = 1,b = 2;
`${a} + ${b} = ${a+b}`


//------
let a = {b:1};
`${a.b}`


//------
function foo(){
    return 'bar';
}
`foo ${foo()}`


//------
let a = `${b}`
let a = `${`b`}`


//---------
alert`1`
alert(1)


//--------
fn`Hello ${arg1}, do you know ${arg2}?`

fn(["Hello ", ", do you know ", "?"], arg1, arg2);


//-------
function upperExpr (template, ...expressions) {
    return template.reduce((accumulator, part, i) => {
        return accumulator + expressions[i - 1].toUpperCase() + part
    })
}

var name = 'world'
var text = upperExpr`hello ${name}`
console.log(text)
// => 'hello WORLD'



//-------
var message =
    SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}



//---------
i18n`Hello,${name}!`
