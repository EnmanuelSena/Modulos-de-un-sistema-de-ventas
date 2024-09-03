document.addEventListener('DOMContentLoaded', function () {
    const saveSettingsButton = document.getElementById('saveSettings');
    const companyNameInput = document.getElementById('companyName');
    const currencyInput = document.getElementById('currency');
    const taxRateInput = document.getElementById('taxRate');
    const defaultRoleSelect = document.getElementById('defaultRole');

    saveSettingsButton.addEventListener('click', saveSettings);

    function saveSettings() {
        const companyName = companyNameInput.value.trim();
        const currency = currencyInput.value.trim();
        const taxRate = parseFloat(taxRateInput.value.trim());
        const defaultRole = defaultRoleSelect.value;

        if (!companyName || !currency || isNaN(taxRate)) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Aquí deberías agregar la lógica para guardar la configuración en la base de datos
        // Por ejemplo, enviar una solicitud a una API

        // Simulación de guardar configuración
        console.log('Configuración guardada:', {
            companyName,
            currency,
            taxRate,
            defaultRole
        });

        alert('Configuración guardada exitosamente.');
    }
});
