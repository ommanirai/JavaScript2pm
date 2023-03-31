function welcome(arg, cb){
    console.log('from welcome function')
    // delay
    setTimeout(function(){ 
        cb();
    }, 3000)
}

welcome(233, function(){
    console.log('from callback function')
});

console.log('from outside the callback')


// setTimeout(function(){

// }, 3000)