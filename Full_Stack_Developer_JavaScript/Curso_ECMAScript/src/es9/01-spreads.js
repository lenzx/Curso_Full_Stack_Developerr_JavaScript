const user = {
    username: 'gndx',
    age: 34,
    country: 'co'
}
const {username, ...values} = user
console.table(values)
