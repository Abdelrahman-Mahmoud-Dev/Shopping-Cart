function $(selector) {
    return document.querySelector(selector)
}

let userName = $('#username'),
    password = $('#password'),
    email = $('#email'),
    registerBtn = $('#sign-up');

    
registerBtn.addEventListener('click', signUp)

function signUp(e) {
    e.preventDefault();
    if (!(userName.value.trim()) || !(password.value) || !(email.value.trim())) {
        alert('empty');
    } else {
        localStorage.setItem('username', userName.value.trim());
        localStorage.setItem('password', password.value);
        localStorage.setItem('email', email.value.trim());
        location = 'index.html';
    }
}
