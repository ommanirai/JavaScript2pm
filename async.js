// sync and async


// synchronous behaviour:

// step1
// step2 => it waits the result of step 1
// step3 =>> it waits the result of step 2
// step4 => it waits the result of step 3
// step5 => it waits the result of step 4

// step n => it waits the result of step (n-1)


// asynchronous behaviour:

// step 1
// step 2 => step 1 ko result kurnu pardaina
// step 3 => step 2 ko result kurnu pardaina
// step 4
// step 5

// step n => step (n-1) ko result kurnu parena


// db_connect()
// data_validation()
// db_insert()
// db_sendMail()


console.log('step 1')
console.log('step 2')
console.log('step 3')
setTimeout(function(){
    console.log('step 4')
}, 6000) // milisecond
console.log('step 5')
console.log('step 6')


