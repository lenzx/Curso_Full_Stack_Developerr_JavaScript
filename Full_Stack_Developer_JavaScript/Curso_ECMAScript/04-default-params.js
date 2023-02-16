function newUser(name, age, country) {
    var name = name || 'oscar'
    var age = age || 34
    var country = country || 'mx'
    console.log(name,age,country)
}

newUser()
newUser('eduardo',28,'CL')

function newUser2(name = 'oscar',age = 34, country = 'MX') {
    console.log(name,age,country)
}
newUser2()
newUser2('eduardo',28,'CL')
