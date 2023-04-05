/*
es6 and above:
1. object shorthand
2. object destruct
3. default argument
4. arrow notation function
5. import and export
*/

function display() {
    fruits = ['apple', 'banana', 'grapes', 'kiwi']
    names = ['ram', 'shyam']
    number = 1234;
    return {
        fruits: fruits,// object shorthand
        names,
        c: number
    }
}
// var abc = display()
// console.log(abc.fruits)

// object destruct:
// var { fruits: fruitList, names, c } = display()
// console.log(fruitList)
// console.log(names)
// console.log(c)


// default argument:
function welcome(def = {
    name: 'ram',
    age: 21,
    gender: 'male'
}) {
    console.log('within the function')
    console.log(def.name + ' ' + def.age + ' ' + def.gender)
}

var obj = {
    name: 'abc',
    age: 23,
    gender: 'female'
}

// welcome(obj)

// arrow notation function
function demo1(name) {
    // console.log(a, b, c)
    return name;
}

// const demo = (a, b, c) => {
//     console.log('arrow notation function')
//     console.log(a, b, c)
// }

// const demo = name => {
//     return name;
// }
// const demo = name => name;
// var a = demo('sita')
// console.log(a)


// import and export
// export
// two ways of export
/*
1. default export : there can be only one default export within a file
2. named export : there can be more than one named export within a file

NOTE: There can be both default and named export within a file

export default name = 'ram'
export const demo

import abc from 'location_of_the_file'
import {demo}, abc from 'location_of_the_file'

*/