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

        const newRow = userTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const roleCell = newRow.insertCell(2);
        const actionsCell = newRow.insertCell(3);

        nameCell.textContent = name;
        emailCell.textContent = email;
        roleCell.textContent = role;

        actionsCell.innerHTML = `
            <button class="action-btn edit">Editar</button>
            <button class="action-btn delete">Eliminar</button>
        `;

        // Limpiar el formulario después de agregar
        userNameInput.value = '';
        userEmailInput.value = '';

        // Agregar eventos para los botones de acción
        newRow.querySelector('.edit').addEventListener('click', function () {
            editUser(newRow);
        });
        newRow.querySelector('.delete').addEventListener('click', function () {
            deleteUser(newRow);
        });
    }

    function editUser(row) {
        const name = prompt('Ingrese el nuevo nombre:', row.cells[0].textContent);
        const email = prompt('Ingrese el nuevo correo electrónico:', row.cells[1].textContent);
        const role = prompt('Ingrese el nuevo rol:', row.cells[2].textContent);

        if (name) row.cells[0].textContent = name;
        if (email) row.cells[1].textContent = email;
        if (role) row.cells[2].textContent = role;
    }

    function deleteUser(row) {
        if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
            userTable.deleteRow(row.rowIndex);
        }
    }
});
