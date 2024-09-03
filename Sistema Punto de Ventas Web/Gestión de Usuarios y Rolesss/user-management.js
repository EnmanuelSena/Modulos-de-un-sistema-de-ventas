document.addEventListener('DOMContentLoaded', function () {
    const addUserForm = document.getElementById('addUserForm');
    const userTableBody = document.querySelector('#userTable tbody');

    // Ejemplo de usuarios predefinidos
    let users = [
        { username: 'admin', role: 'Administrador' },
        { username: 'employee1', role: 'Empleado' }
    ];

    // Función para renderizar la lista de usuarios en la tabla
    function renderUserTable() {
        userTableBody.innerHTML = '';
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.role}</td>
                <td class="actions">
                    <button onclick="editUser(${index})">Editar</button>
                    <button onclick="deleteUser(${index})">Eliminar</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Función para añadir un nuevo usuario
    addUserForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Aquí podrías añadir la lógica para almacenar la contraseña de manera segura

        users.push({ username, role });
        renderUserTable();
        addUserForm.reset();
    });

    // Función para editar un usuario (a implementar)
    window.editUser = function (index) {
        const user = users[index];
        alert('Funcionalidad de edición aún no implementada.');
        // Aquí podrías abrir un modal o permitir editar en línea
    };

    // Función para eliminar un usuario
    window.deleteUser = function (index) {
        if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            users.splice(index, 1);
            renderUserTable();
        }
    };

    // Renderiza la tabla de usuarios al cargar la página
    renderUserTable();
});
