let fruits = ['apple','banana'];
let [a,b] = fruits
console.log(a,fruits[1])

let user = {
    nameUser:' jose',
    age: 23
}
let {nameUser,age} = user
console.log(nameUser, user.age)

// spread operator

let person = {
    name: 'oscar',
    age: 28
}
let country = 'mx'
let data = {
    id: 1,
    ...person,
    country
}
console.log(data)

// rest

function sum(num,...values) {
    console.log(values)
    console.log(num+values[0])
    return num + values[0]
}

sum(1,2,3,4,5,6,7)

function solution(json1, json2){
    let suma = {
    ...json1,
    ...json2
    }
    return suma
}
console.log(solution({
    name: "Bigotes",
    food: "Pollito"
}))
