const promise = () => {
    return new Promise((resolve,rejeact) => {
        (true)
        ? setTimeout(() => resolve('async!!'),2000)
        : rejeact(new Error('error'))
    })
}

const async = async () => {
    const someting = await promise() 
    console.log(someting)
    console.log('hello')
}

console.log('before')
async()
console.log('after')