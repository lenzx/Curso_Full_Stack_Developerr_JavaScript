//flat
const array = [1,2,3,[1,2,3,4,[1,2,3,4]]]
console.log(array.flat(3))

//flatmap

const array2 = [1,2,3,4]
console.log(array2.flatMap(v=>[v,v*2]))