document.addEventListener('DOMContentLoaded', function () {
    const addUserButton = document.getElementById('addUser');
    const userNameInput = document.getElementById('userName');
    const userEmailInput = document.getElementById('userEmail');
    const userRoleSelect = document.getElementById('userRole');
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    addUserButton.addEventListener('click', addUser);

    function addUser() {
        const name = userNameInput.value.trim();
        const email = userEmailInput.value.trim();
        const role = userRoleSelect.value;

        if (!name || !email) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Simulación de la creación de un nuevo usuario
        const userID = Math.floor(Math.random() * 1000); // ID de usuario aleatorio

        // Agregar el nuevo usuario a la tabla
        const row = userTable.insertRow();
        row.insertCell().textContent = userID;
        row.insertCell().textContent = name;
        row.insertCell().textContent = email;
        row.insertCell().textContent = role.charAt(0).toUpperCase() + role.slice(1);

        const actionCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteUser(row));
        actionCell.appendChild(deleteButton);

        // Limpiar el formulario
        userNameInput.value = '';
        userEmailInput.value = '';

        alert('Usuario agregado exitosamente.');
    }

    function deleteUser(row) {
        if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
            row.remove();
            alert('Usuario eliminado.');
        }
    }
});
