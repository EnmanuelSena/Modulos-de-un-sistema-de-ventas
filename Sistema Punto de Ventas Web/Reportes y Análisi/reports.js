document.addEventListener('DOMContentLoaded', function () {
    const generateReportButton = document.getElementById('generateReport');
    const exportCsvButton = document.getElementById('exportCsv');
    const exportPdfButton = document.getElementById('exportPdf');
    const reportTypeSelect = document.getElementById('reportType');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const reportTableHead = document.querySelector('#reportTable thead tr');
    const reportTableBody = document.querySelector('#reportTable tbody');

    generateReportButton.addEventListener('click', generateReport);
    exportCsvButton.addEventListener('click', exportCsv);
    exportPdfButton.addEventListener('click', exportPdf);

    function generateReport() {
        const reportType = reportTypeSelect.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        // Simular la generación de datos del reporte (aquí deberías hacer una solicitud a tu API o base de datos)
        const reportData = getReportData(reportType, startDate, endDate);

        // Actualizar tabla con los datos del reporte
        updateReportTable(reportData);
    }

    function getReportData(type, startDate, endDate) {
        // Aquí deberías realizar una llamada a tu backend para obtener los datos del reporte
        // Para fines de demostración, se simula una respuesta estática

        if (type === 'sales') {
            return {
                headers: ['Fecha', 'Producto', 'Cantidad', 'Precio'],
                rows: [
                    ['2024-09-01', 'Producto A', '5', '$50'],
                    ['2024-09-02', 'Producto B', '3', '$30']
                ]
            };
        } else if (type === 'inventory') {
            return {
                headers: ['Producto', 'Cantidad', 'Precio'],
                rows: [
                    ['Producto A', '100', '$10'],
                    ['Producto B', '50', '$20']
                ]
            };
        } else if (type === 'orders') {
            return {
                headers: ['Pedido ID', 'Cliente', 'Fecha', 'Total'],
                rows: [
                    ['001', 'Cliente A', '2024-09-01', '$100'],
                    ['002', 'Cliente B', '2024-09-02', '$200']
                ]
            };
        }
    }

    function updateReportTable(data) {
        // Limpiar la tabla
        reportTableHead.innerHTML = '';
        reportTableBody.innerHTML = '';

        // Agregar cabeceras
        data.headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            reportTableHead.appendChild(th);
        });

        // Agregar filas
        data.rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            reportTableBody.appendChild(tr);
        });
    }

    function exportCsv() {
        // Simular exportación a CSV
        const csvContent = generateCsvContent();
        downloadFile('report.csv', 'text/csv', csvContent);
    }

    function exportPdf() {
        // Simular exportación a PDF (para exportar PDF realmente necesitarías una biblioteca como jsPDF)
        alert('La exportación a PDF no está implementada en esta demostración.');
    }

    function generateCsvContent() {
        const headers = Array.from(reportTableHead.children).map(th => th.textContent).join(',');
        const rows = Array.from(reportTableBody.children).map(tr => {
            return Array.from(tr.children).map(td => td.textContent).join(',');
        }).join('\n');
        return `${headers}\n${rows}`;
    }

    function downloadFile(filename, mimeType, content) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
});
