function newUser(user,age,country)  {
    return {
        user: user,
        age: age,
        country: country
    }
}
console.log(newUser('gndx',32,'CL',1))
function newUser1(user,age,country,uId)  {
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser1('gndx',32,'CL',1))