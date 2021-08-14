function $(selector) {
    return document.querySelector(selector)
}

let userName = $('#username'),
    password = $('#password'),
    loginBtn = $('#signIn');

loginBtn.addEventListener('click', login)

function login(e) {
    e.preventDefault();
    let getuser = localStorage.getItem('username'),
        getpassword = localStorage.getItem('password')
    if (!(userName.value) || !(password.value)){
        alert('plase Enter value')
    } else{
        if(getuser && 
        getuser===userName.value.trim() && 
        getpassword === password.value && 
        getuser){
               location = 'index.html'
        }else{
               alert('wrong')
        }
    }      
}