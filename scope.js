// application data => variable, function, const

// scope is accessibility of application data
// access garna milyo vane within the scope
// access garna milena vane out of scope

// types of scope
/*
1. global scope
2. functional scope/ local scope
3. block scope

*/
// 1. global scope
var name = "kailash"
const address = "lumbini"

function welcome(addr){
    name = "ommani"
    // console.log("welcome "+addr)
    console.log("name inside: ", name)
}
// welcome("pkr")
// console.log('name from outside: ', name)

// 2. functional/local scope
function local(){
    var phone = "98187234"  // phone is local scope
    const email = "ommanirai27@gmail.com" // email is local scope

    function location(plc){

    }
}
// console.log('phone number: ', phone)
// console.log('email: ', email)

// 3. block scope

function blockScope(person){
    var msg = "Hi "+person+", welcome to VEDU"
    if(false){
        let text = "block scope concept";
        console.log(text)
    }
    else{
        // var text = "Hi, welcome to VEDU" 
        console.log(text) 
    }
}
blockScope('ram')


// truthy value
// falsy value => null, 0, '', undefined, false