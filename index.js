const myBtn = document.querySelector('#myBtn');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
const message = document.querySelector('#message');
const username = document.querySelector('#username');

myBtn.addEventListener('click', () => {
    showPassword();
});

loginBtn.addEventListener('click', () => {
    if (confirm('Do you want to proceed this log in?')) {
        logIn();
    }
    else {
        message.textContent = 'Login cancelled!';
    }
});
function logIn() {
    if (username.value === '') {
        message.textContent = 'Please enter your username';
    }
    else if (password.value === '') {
        message.textContent = 'Password cannot be empty';
    }
    else if (username.value.trim() === 'Elvis' && password.value.trim() === '1234') {
        message.textContent = `Welcome ${username.value}`;
    }
    else {
        message.textContent = 'Invalid password or username. Please try again!';
    }
}


function showPassword() {
    if (password.type === 'password') {
        password.type = 'text';
        myBtn.textContent = 'Hide Password';
    }
    else {
        password.type = 'password';
        myBtn.textContent = 'Show Password';
    }
}
