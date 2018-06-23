//fomr blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){

    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/; //name must only letters from 2 to 10 characters
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const name = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; //m
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
function validateZip(){
    const name = document.getElementById('zipcode');
    const re = /^[0-9]{6}(-[0-9]{2})?$/; //saya 6 digits and '- 6 digits optional'
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
function validatePhone(){
     const name = document.getElementById('name');
    const re = /^\(?\d{3}\)?[-. ]?$\d{3}[-. ]?\d{4}$/; //name must only letters from 2 to 10 characters
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
    
