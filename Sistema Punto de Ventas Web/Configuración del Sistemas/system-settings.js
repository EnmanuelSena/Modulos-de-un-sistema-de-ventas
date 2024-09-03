document.addEventListener('DOMContentLoaded', function () {
    const settingsForm = document.getElementById('settingsForm');

    // Cargar configuraciones guardadas
    function loadSettings() {
        const taxRate = localStorage.getItem('taxRate') || '10.00';
        const defaultDiscount = localStorage.getItem('defaultDiscount') || '5.00';
        const currency = localStorage.getItem('currency') || 'USD';

        document.getElementById('taxRate').value = taxRate;
        document.getElementById('defaultDiscount').value = defaultDiscount;
        document.getElementById('currency').value = currency;
    }

    // Guardar configuraciones en el almacenamiento local
    function saveSettings(event) {
        event.preventDefault();

        const taxRate = document.getElementById('taxRate').value;
        const defaultDiscount = document.getElementById('defaultDiscount').value;
        const currency = document.getElementById('currency').value;

        localStorage.setItem('taxRate', taxRate);
        localStorage.setItem('defaultDiscount', defaultDiscount);
        localStorage.setItem('currency', currency);

        alert('Configuración guardada exitosamente.');
    }

    // Cargar configuraciones al iniciar
    loadSettings();

    // Guardar configuraciones al enviar el formulario
    settingsForm.addEventListener('submit', saveSettings);
});
