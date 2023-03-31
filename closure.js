// closure is inner function which has access to
/*
1. global scope
2. parent function scope and arguments
3. own scope and arguments
*/


var email = 'ommanirai27@gmail.com'
function welcome(name){
    var greetingText = 'hi'

    function location(address){
        // location is closure
        var text = greetingText+ ', '+name+'('+email+ ') ' +'welcome to '+address;
        // console.log('text is: ', text)
        return text;
    }
    return location;    
    // location('lalitpur')
    // location('lumbini')
    // location('pokhara')
}
// location('ktm')
var abc = welcome('ommani')('ktm')
var xyz = welcome('ram')
console.log('result is: ', abc)
// console.log('result is: ', abc('ktm'))
// console.log('result is: ', xyz('lalitpur'))
// welcome('ram')
// welcome('shyam')
// welcome('sita')


// task
// var mul = multiply(2)(5) // 6 multiply(2,3)
