const regex = /\b(apple)+\b/g
const fruits = 'apple,kiwi,orange,banana,apple,apple'
for (const match of fruits.matchAll(regex)) {
    console.log(match)
    console.log(match['input'])
console.table(match)
}
