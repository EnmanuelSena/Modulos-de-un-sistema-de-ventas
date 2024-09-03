document.addEventListener('DOMContentLoaded', function () {
    const addUserButton = document.getElementById('addUser');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const roleSelect = document.getElementById('role');
    const usersTableBody = document.querySelector('#usersTable tbody');

    let users = [];

    addUserButton.addEventListener('click', addUser);

    function addUser() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const role = roleSelect.value;

        if (!username || !password) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const user = { username, password, role };
        users.push(user);
        updateUserTable();

        // Limpiar formulario
        usernameInput.value = '';
        passwordInput.value = '';
        roleSelect.value = 'employee';
    }

    function updateUserTable() {
        usersTableBody.innerHTML = '';

        users.forEach((user, index) => {
            const row = document.createElement('tr');

            const usernameCell = document.createElement('td');
            usernameCell.textContent = user.username;
            row.appendChild(usernameCell);

            const roleCell = document.createElement('td');
            roleCell.textContent = user.role === 'admin' ? 'Administrador' : 'Empleado';
            row.appendChild(roleCell);

            const actionsCell = document.createElement('td');
            actionsCell.classList.add('actions');

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => editUser(index));
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => deleteUser(index));
            actionsCell.appendChild(deleteButton);

            row.appendChild(actionsCell);

            usersTableBody.appendChild(row);
        });
    }

    function editUser(index) {
        const user = users[index];
        usernameInput.value = user.username;
        passwordInput.value = user.password;
        roleSelect.value = user.role;

        addUserButton.textContent = 'Actualizar Usuario';
        addUserButton.removeEventListener('click', addUser);
        addUserButton.addEventListener('click', () => updateUser(index));
    }

    function updateUser(index) {
        users[index].username = usernameInput.value;
        users[index].password = passwordInput.value;
        users[index].role = roleSelect.value;

        updateUserTable();

        // Restablecer botón y formulario
        addUserButton.textContent = 'Agregar Usuario';
        addUserButton.removeEventListener('click', updateUser);
        addUserButton.addEventListener('click', addUser);

        usernameInput.value = '';
        passwordInput.value = '';
        roleSelect.value = 'employee';
    }

    function deleteUser(index) {
        users.splice(index, 1);
        updateUserTable();
    }
});
