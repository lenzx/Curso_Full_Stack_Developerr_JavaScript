//piedra 1,papel 2,tijera 3

var maquina = Math.ceil(Math.random()*3);
var numero = maquina
function elejir(x) {
    if (x == 'piedra') {
        return 1
    }
    if (x == 'papel') {
        return 2
    }
    if (x == 'tijera') {
        return 3
    }
}

function jugar(a) {
    if (elejir(a) === 1) {
        if (numero === 1) {
            console.log('empate')
        }
        if (numero === 2) {
            console.log('pierdes')
        }
        if (numero === 3) {
            console.log('ganas')
        }
    }
    if (elejir(a) === 2) {
        if (numero === 1) {
            console.log('ganas')
        }
        if (numero === 2) {
            console.log('empate')
        }
        if (numero === 3) {
            console.log('pierdes')
        }
    }
    if (elejir(a) === 3) {
        if (numero === 1) {
            console.log('pierdes')
        }
        if (numero === 2) {
            console.log('ganas')
        }
        if (numero === 3) {
            console.log('empate')
        }
    }
}
jugar("piedra")
console.log('eleccion maquina: ' + numero)