document.addEventListener('DOMContentLoaded', function () {
    const generateReportButton = document.getElementById('generateReport');
    const reportTypeSelect = document.getElementById('reportType');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const reportTable = document.getElementById('reportTable').getElementsByTagName('tbody')[0];
    const reportHeaders = document.getElementById('reportHeaders');
    const downloadReportButton = document.getElementById('downloadReport');

    generateReportButton.addEventListener('click', generateReport);

    function generateReport() {
        const reportType = reportTypeSelect.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        if (!startDate || !endDate) {
            alert('Por favor, seleccione un rango de fechas.');
            return;
        }

        // Simulación de generación de reporte
        console.log(`Generando reporte de tipo ${reportType} desde ${startDate} hasta ${endDate}`);

        // Limpia la tabla antes de agregar nuevos datos
        reportTable.innerHTML = '';
        reportHeaders.innerHTML = '';

        // Simulación de datos del reporte
        const sampleData = getSampleData(reportType);

        // Agregar encabezados de columnas
        const headers = Object.keys(sampleData[0]);
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            reportHeaders.appendChild(th);
        });

        // Agregar filas de datos
        sampleData.forEach(dataRow => {
            const row = reportTable.insertRow();
            headers.forEach(header => {
                const cell = row.insertCell();
                cell.textContent = dataRow[header];
            });
        });

        // Mostrar botón de descargar
        downloadReportButton.style.display = 'block';
    }

    function getSampleData(type) {
        // Aquí puedes implementar la lógica para obtener datos reales del servidor o base de datos
        // Para esta simulación, retornamos datos de ejemplo

        switch (type) {
            case 'sales':
                return [
                    { Fecha: '2024-09-01', Producto: 'Corte', Monto: '$20.00' },
                    { Fecha: '2024-09-02', Producto: 'Afeitada', Monto: '$15.00' }
                ];
            case 'products':
                return [
                    { Nombre: 'Corte', Precio: '$20.00', Stock: 100 },
                    { Nombre: 'Afeitada', Precio: '$15.00', Stock: 50 }
                ];
            case 'users':
                return [
                    { Nombre: 'Juan Pérez', Correo: 'juan@example.com', Rol: 'Empleado' },
                    { Nombre: 'Ana Gómez', Correo: 'ana@example.com', Rol: 'Administrador' }
                ];
            default:
                return [];
        }
    }

    downloadReportButton.addEventListener('click', function () {
        // Aquí podrías implementar la lógica para descargar el reporte
        alert('Funcionalidad de descarga no implementada.');
    });

    // Inicialmente ocultar el botón de descarga
    downloadReportButton.style.display = 'none';
});
