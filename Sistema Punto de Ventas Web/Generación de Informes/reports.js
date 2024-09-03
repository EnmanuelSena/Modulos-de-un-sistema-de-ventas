document.addEventListener('DOMContentLoaded', function () {
    const reportTypeSelect = document.getElementById('reportType');
    const generateReportButton = document.getElementById('generateReport');
    const downloadReportButton = document.getElementById('downloadReport');
    const reportOutput = document.getElementById('reportOutput');

    let salesHistory = JSON.parse(localStorage.getItem('salesHistory')) || [];

    function generateReport() {
        const reportType = reportTypeSelect.value;
        reportOutput.innerHTML = '';

        if (salesHistory.length === 0) {
            reportOutput.textContent = 'No hay datos de ventas para generar un informe.';
            return;
        }

        switch (reportType) {
            case 'sales-summary':
                generateSalesSummary();
                break;
            case 'top-products':
                generateTopProducts();
                break;
            case 'sales-by-date':
                generateSalesByDate();
                break;
            default:
                reportOutput.textContent = 'Selecciona un tipo de informe válido.';
        }
    }

    function generateSalesSummary() {
        let totalSales = 0;
        let totalAmount = 0;

        salesHistory.forEach(sale => {
            totalSales += sale.products.length;
            totalAmount += sale.total;
        });

        reportOutput.innerHTML = `
            <h3>Resumen de Ventas</h3>
            <p>Total de Ventas: ${salesHistory.length}</p>
            <p>Total de Productos Vendidos: ${totalSales}</p>
            <p>Ingresos Totales: $${totalAmount.toFixed(2)}</p>
        `;
    }

    function generateTopProducts() {
        const productCount = {};

        salesHistory.forEach(sale => {
            sale.products.forEach(product => {
                if (!productCount[product.name]) {
                    productCount[product.name] = 0;
                }
                productCount[product.name] += product.quantity;
            });
        });

        const sortedProducts = Object.entries(productCount).sort((a, b) => b[1] - a[1]);

        reportOutput.innerHTML = `
            <h3>Productos más Vendidos</h3>
            <ul>
                ${sortedProducts.map(product => `<li>${product[0]}: ${product[1]} unidades vendidas</li>`).join('')}
            </ul>
        `;
    }

    function generateSalesByDate() {
        const salesByDate = {};

        salesHistory.forEach(sale => {
            const date = new Date(sale.date).toLocaleDateString();

            if (!salesByDate[date]) {
                salesByDate[date] = 0;
            }
            salesByDate[date] += sale.total;
        });

        reportOutput.innerHTML = `
            <h3>Ventas por Fecha</h3>
            <ul>
                ${Object.entries(salesByDate).map(date => `<li>${date[0]}: $${date[1].toFixed(2)}</li>`).join('')}
            </ul>
        `;
    }

    generateReportButton.addEventListener('click', generateReport);

    downloadReportButton.addEventListener('click', function () {
        if (reportOutput.innerHTML === '') {
            alert('Primero genera un informe.');
            return;
        }

        const blob = new Blob([reportOutput.innerHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `informe_${reportTypeSelect.value}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
