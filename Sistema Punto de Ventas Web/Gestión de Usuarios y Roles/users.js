document.addEventListener('DOMContentLoaded', function () {
    const addUserButton = document.getElementById('addUser');
    const userNameInput = document.getElementById('userName');
    const userEmailInput = document.getElementById('userEmail');
    const userRoleSelect = document.getElementById('userRole');
    const userTableBody = document.querySelector('#userTable tbody');

    addUserButton.addEventListener('click', addUser);

    function addUser() {
        const name = userNameInput.value.trim();
        const email = userEmailInput.value.trim();
        const role = userRoleSelect.value;

        if (!name || !email) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Aquí deberías agregar la lógica para guardar el usuario en la base de datos
        // Por ejemplo, enviar una solicitud a una API

        // Agregar usuario a la tabla
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${role}</td>
            <td><button class="delete" onclick="deleteUser(this)">Eliminar</button></td>
        `;
        userTableBody.appendChild(tr);

        // Limpiar campos
        userNameInput.value = '';
        userEmailInput.value = '';
    }

    function deleteUser(button) {
        const row = button.closest('tr');
        row.remove();
        // Aquí deberías agregar la lógica para eliminar el usuario de la base de datos
        // Por ejemplo, enviar una solicitud a una API
    }
});
