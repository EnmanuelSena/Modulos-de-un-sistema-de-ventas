document.addEventListener('DOMContentLoaded', function () {
    const generateReportButton = document.getElementById('generateReport');
    const reportTypeSelect = document.getElementById('reportType');
    const dateFromInput = document.getElementById('dateFrom');
    const dateToInput = document.getElementById('dateTo');
    const reportTable = document.getElementById('reportTable');

    generateReportButton.addEventListener('click', generateReport);

    function generateReport() {
        const reportType = reportTypeSelect.value;
        const dateFrom = dateFromInput.value;
        const dateTo = dateToInput.value;

        if (!dateFrom || !dateTo) {
            alert('Por favor, seleccione un rango de fechas.');
            return;
        }

        let reportData;

        switch (reportType) {
            case 'sales':
                reportData = generateSalesReport(dateFrom, dateTo);
                break;
            case 'inventory':
                reportData = generateInventoryReport();
                break;
            case 'products':
                reportData = generateProductsReport();
                break;
            case 'users':
                reportData = generateUsersReport();
                break;
            default:
                alert('Tipo de reporte no válido.');
                return;
        }

        displayReport(reportData);
    }

    function generateSalesReport(dateFrom, dateTo) {
        // Generar datos ficticios de ventas para la demostración
        return [
            { date: '2024-09-01', totalSales: 500, transactions: 10 },
            { date: '2024-09-02', totalSales: 700, transactions: 15 },
            { date: '2024-09-03', totalSales: 300, transactions: 5 },
        ];
    }

    function generateInventoryReport() {
        // Generar datos ficticios de inventario para la demostración
        return [
            { productName: 'Producto 1', quantity: 20, price: 10 },
            { productName: 'Producto 2', quantity: 15, price: 20 },
            { productName: 'Producto 3', quantity: 5, price: 30 },
        ];
    }

    function generateProductsReport() {
        // Generar datos ficticios de productos para la demostración
        return [
            { productName: 'Producto 1', sold: 50, totalRevenue: 500 },
            { productName: 'Producto 2', sold: 30, totalRevenue: 600 },
            { productName: 'Producto 3', sold: 20, totalRevenue: 400 },
        ];
    }

    function generateUsersReport() {
        // Generar datos ficticios de usuarios para la demostración
        return [
            { username: 'admin', role: 'Administrador' },
            { username: 'empleado1', role: 'Empleado' },
            { username: 'empleado2', role: 'Empleado' },
        ];
    }

    function displayReport(reportData) {
        reportTable.innerHTML = '';

        if (reportData.length === 0) {
            reportTable.innerHTML = '<tr><td colspan="4">No se encontraron datos.</td></tr>';
            return;
        }

        let headers = Object.keys(reportData[0]);

        // Crear encabezados de tabla
        let headerRow = '<tr>';
        headers.forEach(header => {
            headerRow += `<th>${header}</th>`;
        });
        headerRow += '</tr>';
        reportTable.innerHTML += headerRow;

        // Crear filas de datos
        reportData.forEach(data => {
            let dataRow = '<tr>';
            headers.forEach(header => {
                dataRow += `<td>${data[header]}</td>`;
            });
            dataRow += '</tr>';
            reportTable.innerHTML += dataRow;
        });
    }
});
