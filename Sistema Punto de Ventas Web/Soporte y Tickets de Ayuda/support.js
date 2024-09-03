document.addEventListener('DOMContentLoaded', function () {
    const submitTicketButton = document.getElementById('submitTicket');
    const ticketTitleInput = document.getElementById('ticketTitle');
    const ticketDescriptionInput = document.getElementById('ticketDescription');
    const ticketTable = document.getElementById('ticketTable').getElementsByTagName('tbody')[0];

    submitTicketButton.addEventListener('click', submitTicket);

    function submitTicket() {
        const title = ticketTitleInput.value.trim();
        const description = ticketDescriptionInput.value.trim();

        if (!title || !description) {
            alert('Por favor, complete todos los campos del ticket.');
            return;
        }

        // Simulación de envío de ticket
        const ticketID = Math.floor(Math.random() * 1000); // ID de ticket aleatorio
        const currentDate = new Date().toLocaleDateString();

        // Agregar el nuevo ticket a la tabla
        const row = ticketTable.insertRow();
        row.insertCell().textContent = ticketID;
        row.insertCell().textContent = title;
        row.insertCell().textContent = 'Abierto';
        row.insertCell().textContent = currentDate;

        const actionCell = row.insertCell();
        const viewButton = document.createElement('button');
        viewButton.textContent = 'Ver';
        viewButton.addEventListener('click', () => viewTicket(ticketID));
        actionCell.appendChild(viewButton);

        // Limpiar el formulario
        ticketTitleInput.value = '';
        ticketDescriptionInput.value = '';

        alert('Ticket enviado exitosamente.');
    }

    function viewTicket(ticketID) {
        alert(`Visualizando el ticket con ID: ${ticketID}`);
        // Aquí puedes implementar la lógica para mostrar detalles del ticket
    }
});
