document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                alert('Bienvenido, ' + user.username + '!');
                if (user.role === 'admin') {
                    window.location.href = 'admin_dashboard.html'; // Redirige a una página de administrador
                } else {
                    window.location.href = 'employee_dashboard.html'; // Redirige a una página de empleado
                }
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const role = document.getElementById('role').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const userExists = users.some(u => u.username === newUsername);

            if (userExists) {
                alert('El nombre de usuario ya existe');
            } else {
                users.push({ username: newUsername, password: newPassword, role: role });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Usuario registrado con éxito');
                window.location.href = 'index.html';
            }
        });
    }
});
