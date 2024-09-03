document.addEventListener('DOMContentLoaded', function () {
    const addUserButton = document.getElementById('addUser');
    const usernameInput = document.getElementById('username');
    const userRoleSelect = document.getElementById('userRole');
    const userList = document.getElementById('userList');

    let users = JSON.parse(localStorage.getItem('users')) || [];

    function renderUsers() {
        userList.innerHTML = '';

        users.forEach((user, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${user.name} - ${user.role}
                <button class="delete-user" data-index="${index}">Eliminar</button>
            `;
            userList.appendChild(li);
        });

        const deleteUserButtons = document.querySelectorAll('.delete-user');
        deleteUserButtons.forEach(button => {
            button.addEventListener('click', deleteUser);
        });
    }

    function addUser() {
        const username = usernameInput.value.trim();
        const userRole = userRoleSelect.value;

        if (username === '') {
            alert('El nombre de usuario no puede estar vacío.');
            return;
        }

        const user = {
            name: username,
            role: userRole
        };

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();

        usernameInput.value = '';
    }

    function deleteUser(event) {
        const userIndex = event.target.getAttribute('data-index');
        users.splice(userIndex, 1);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
    }

    addUserButton.addEventListener('click', addUser);
    renderUsers();
});
