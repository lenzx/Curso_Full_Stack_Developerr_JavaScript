var lastname = 'David';
lastname='Oscar';
console.log(lastname);

let fruit = 'apple';
fruit = 'kiwi'
console.log(fruit)

const animal = 'perro'
animal = 'gato'
console.log(animal)

const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'banana';// block scope
    }
    console.log(fruit1);
    console.log(fruit1);
    console.log(fruit1);
}
fruits();
