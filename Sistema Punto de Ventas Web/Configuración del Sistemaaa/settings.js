document.addEventListener('DOMContentLoaded', function () {
    const saveSettingsButton = document.getElementById('saveSettings');
    const manageUsersButton = document.getElementById('manageUsers');

    const currencySelect = document.getElementById('currency');
    const taxRateInput = document.getElementById('taxRate');
    const storeNameInput = document.getElementById('storeName');
    const storeAddressInput = document.getElementById('storeAddress');

    saveSettingsButton.addEventListener('click', saveSettings);
    manageUsersButton.addEventListener('click', manageUsers);

    function saveSettings() {
        const settings = {
            currency: currencySelect.value,
            taxRate: parseFloat(taxRateInput.value),
            storeName: storeNameInput.value,
            storeAddress: storeAddressInput.value
        };

        console.log('Configuraciones guardadas:', settings);
        alert('Configuraciones guardadas exitosamente.');
    }

    function manageUsers() {
        alert('Funcionalidad de gestión de usuarios aún no implementada.');
    }
});
