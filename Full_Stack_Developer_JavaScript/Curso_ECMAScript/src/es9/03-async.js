async function* anothergenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}
const ohter= anothergenerator()
ohter.next().then(response => console.log(response.value))
ohter.next().then(response => console.log(response.value))
ohter.next().then(response => console.log(response.value))
console.log('hello')

async function arrayOfNames(array) {
    for await (let value of array){
        console.table(value)
    }
}

const nombre=arrayOfNames(['oscar','david','juan','pedro'])
console.log('after')