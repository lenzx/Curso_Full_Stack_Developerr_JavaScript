//declarando
class user{}
//instancia de una clase
// const newUser = new user()
class User {
    //metodos
    greeting() {
        return 'hello'
    }
}
const gndx = new User()
console.log(gndx.greeting())

const developer = new User
console.log(developer.greeting())

// constructor

class user {
    //constructor
    constructor(){
        console.log('new usuario')
    }
    greeting() {
        return 'hello'
    }
}

const david = new user()

//this

class user {
    constructor(name) {
        this.name = name
    }
    // metodos
    speak() {
        return 'hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}
const ana = new user('ana')
console.log(ana.greeting())

// setters and getters

class user {
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    //metodos
    #speak() {
    return 'hello' }
    greeting() {
        return `${ this.speak()} ${this.name} ${this.age}`
    }
    get #uAge() {
        return this.age
    }
    set #uAge(n) {
        this.age = n
    }
}
const juan = new user('juan',19)
console.log(juan.greeting())
juan.uAge = 20
console.log(juan.greeting())
