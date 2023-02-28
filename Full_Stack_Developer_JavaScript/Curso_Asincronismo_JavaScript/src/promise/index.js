const promesa = new Promise (function(resolve,reject) {
    resolve('correcto')
});

const cow = 9

const countCows = new Promise(function(resolve,reject){
    if (cow > 10){
        resolve(`we have ${cow} cows on the farm`)
    } else {
        reject(`there is no cows on the farm`)
    }
});  

countCows.then((result)=> {
    console.log(result);
}).catch((error)=>{
    console.log(error)
}).finally(()=>{console.log('finally')})

countCows.then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(error)
})