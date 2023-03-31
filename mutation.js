// mutable and immutable behaviour

var name = 'ramesh'
name1 = name;

// name1 = 'raju'
name = 'shyam'

// console.log(name)
// console.log(name1)

/*
immutable behaviour:
-> if change in original it is not reflected in references
-> if change in reference it is not reflected in original
-> primitive data types are immutable

*/
var emailData= {
    from:'vedu',
    to:'ommani',
    msg:'hi'
}

emailData1 = emailData;
// emailData1.status = 'online'
emailData.status = 'active'

// console.log(emailData)
// console.log(emailData1)

// mutable behaviour
/*
-> if change in original it is reflected in reference and vice versa
-> non-primitive data type are mutable
*/

var msg= {
    from:'vedu',
    to:'ommani',
    message:'hi'
}
function Greeting(arg){
    // arg.status = 'active'
    arg = 'inside the function'
}
var str = 'abcdef'

Greeting(str)
console.log(str)
// Greeting(msg)
// console.log('message is: ',msg)

