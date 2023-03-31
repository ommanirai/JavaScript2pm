// var abc;
// abc()
// Welcome()

// function
// function is a reusable block of code which performs specific task
// function function_name(){

// }

// two way of writing a function in js
// 1. expression syntax
// 2. declaration syntax


// 1. expression syntax:
// console.log(abcd)

// abc()
var abc = function(){
    console.log("expression syntax function")
}
// abc()


// 2. declaration syntax:
// function Welcome(name, addr){
//     // console.log("from declaration syntax function")
//     console.log("Hello "+name+", welcome to "+addr)
// }
// Welcome(null,"lalitpur", "ktm", 'asdfasdf', 2,23)
// Welcome("shyam", "bkt")
// Welcome("sita", "ktm")
// Welcome("gita",'pkr')


// Hoisting: Hoisting is a mechanism which moves all the declaration at top before execution



/*
types of function in js:
1. named function
2. function with argument
3. function with return type
4. anynamous function (unnamed function)
5. IIFE (immediately invoked functional expression)

*/
// 2. function with argument
function welcome(details){
    // console.log(details)
    var text = 'hello '+details.name+', welcome to '+ details.address + ' '+details.phone+' '+details.msg+ ' '+details.time; 

    console.log(text)
}

var message = { 
    name: "rahul", // message['name'], message.name
    phone: '982372423434',
    address: 'lalitpur',
    time: '12:00pm',
    msg: "say hi",
}

// welcome('rahul', 'vedu', 98188234, 'say hello', 12)
// welcome(message)


// 3. function with return type
function multiply(num1, num2){
    // var innerResult = num1 * num2;
    // console.log('the multiplication of two number num1 and num2  is: ', innerResult)

    var fruits = ['apple', 'banana', 'mango']
    var response = {
        ram: 'good',
        shyam: 'not bad',
        hari: 'bad'
    }
    var xyz = 'ommani'

    return {
        fruits, // object shorthand property
        response: response,
        xyz 
    }
    // console.log("printing from below the return")
}
var res = multiply(3,5)
console.log('result is: ', res)
// console.log('the multiplication is: ', res)
// console.log('multiplication is: ', res)

// 4.anynamous function

// function(){
    
// }

// 5. IIFE(immediately invoked functional expression)

// syntax: ()()
function sum(n1, n2){
    console.log("sum of two number")
}

// (sum)()

(function(){
    console.log("i am anynamous function")
    console.log("i am taking help of IIFE to execute")

})()