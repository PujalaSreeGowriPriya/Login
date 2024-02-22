function loginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'sree@gmail.com' && password === 'gowri') {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
}
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'sree@gmail.com' && password === 'gowri') {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
}