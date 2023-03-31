function username_validation(){
    var username = document.getElementById('username').value
    // console.log(username)

    if(username.match(/[0-9]/)){
        displayError('Username must be only characters', 'error_username', 'red')
    }
    else if(username.match(/[._\-!@#$%^&*()]/)){
        displayError('Username must be only characters', 'error_username', 'red')
        // document.getElementById('error_username').innerHTML = 'Username must be only characters'
        // document.getElementById('error_username').style.color = 'red'
    }
    else if(username.length < 4){
        displayError('Username must contain atleast 4 characters', 'error_username', 'red')
    }
    else{
        displayError('Valid Username', 'error_username', 'green')
    }
}

function age_validation(){
    var age = document.getElementById('age').value;

    if(!age.match(/^[0-9]+$/)){
        displayError('age must be only number', "error_age", 'red')
    }
    else if(age < 18 ){
        displayError('you must be at least 18 years old','error_age', 'red')
    }
    else if(age > 70){
        displayError('Invalid age', 'error_age', 'red')
    }
    else{
        displayError('valid age', 
        'error_age', 'green')
    }
}

function phone_validation(){
    var phone = document.getElementById('phone').value;
    if(!phone.match(/^[0-9]+$/)){
        displayError('phone must be only number', "error_phone", 'red')
    }
    else if(!phone.match(/^(97|98)/)){
        displayError('phone number must start with 98 or 97', 'error_phone', 'red')
    }
    else if(phone.length != 10){
        displayError('phone number must be 10 digit', 'error_phone', 'red')
    }
    else{
        displayError('valid Phone number', 'error_phone', 'green')
    }
}

function email_validation(){
    var email = document.getElementById('email').value;

    if(!email.match(/^[a-zA-Z][a-zA-Z0-9_.]+[@](gmail)[.](com)$/)){
        displayError('invalid email', 'error_email', 'red')
    }
    else{
        displayError('valid email', 'error_email', 'green')
    }
}

function password_validation(){
    var password = document.getElementById('password').value;
    if(!password.match(/[a-z]/)){
        displayError('password must contain atleast one lowercase alphabet', 'error_password', 'red')
    }
    else if(!password.match(/[A-Z]/)){
        displayError('password must contain atleast one uppercase alphabet', 'error_password', 'red')
    }
    else if(!password.match(/[0-9]/)){
        displayError('password must contain atleast one number', 'error_password', 'red')
    }
    else if(!password.match(/[!@#$%^&*()_+]/)){
        displayError('password must contain atleast one special character', 'error_password', 'red')
    }
    else if(password.length < 8 ){
        displayError('password must contain atleast 8 character', 'error_password', 'red')
    }
    else if(password.length > 30 ){
        displayError('password must not exceed 30 characters', 'error_password', 'red')
    }
    else{
        displayError('valid password', 'error_password', 'green')
    }
}


function displayError(msg, id,color ){
    document.getElementById(id).innerHTML = msg;
    document.getElementById(id).style.color = color;
}