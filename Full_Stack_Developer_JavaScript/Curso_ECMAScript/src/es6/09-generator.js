function* iteracion(array) {
    for (let valor of array) {
        yield valor
    }
}

const it = iteracion(['juan','mariano','jose','miguel','paul'])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
