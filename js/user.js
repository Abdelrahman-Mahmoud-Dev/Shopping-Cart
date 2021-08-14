function $(selector) {
    return document.querySelector(selector)
}

let userContainer = $('#user-container'),
    userName = $('#user'),
    logoutBtn = $('#logout'),
    links = $('#links');


logoutBtn.addEventListener('click', logout)
if (localStorage.getItem('username')) {
    links.style.display = 'none'
    userContainer.style.display = 'flex'
    userName.textContent = localStorage.getItem('username')
}

function logout() {
    localStorage.clear()
    location = 'register.html'
}