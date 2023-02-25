function suma(a,b) {
    return a+b;
}
function suma2(a,b) {
    return a*b;
}

function calc(a,b,callback) {
    return callback(a,b);
}

console.log(calc(4,2,suma))

setTimeout(function() {
    console.log('hola js')
},6900)

function grett (name) {
    console.log(`hola ${name}`)
}

setTimeout(grett,2000,'german')