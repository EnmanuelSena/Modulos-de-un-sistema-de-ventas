document.addEventListener('DOMContentLoaded', function () {
    const saveSettingsButton = document.getElementById('saveSettings');
    const storeNameInput = document.getElementById('storeName');
    const currencyInput = document.getElementById('currency');
    const notificationsSelect = document.getElementById('notifications');
    const themeSelect = document.getElementById('theme');
    const currentSettingsParagraph = document.getElementById('currentSettings');

    // Cargar configuración actual
    loadSettings();

    saveSettingsButton.addEventListener('click', saveSettings);

    function loadSettings() {
        // Cargar configuración desde almacenamiento local o un API
        const settings = JSON.parse(localStorage.getItem('settings')) || {
            storeName: '',
            currency: '',
            notifications: 'enabled',
            theme: 'light'
        };

        storeNameInput.value = settings.storeName;
        currencyInput.value = settings.currency;
        notificationsSelect.value = settings.notifications;
        themeSelect.value = settings.theme;

        displayCurrentSettings(settings);
    }

    function saveSettings() {
        const settings = {
            storeName: storeNameInput.value,
            currency: currencyInput.value,
            notifications: notificationsSelect.value,
            theme: themeSelect.value
        };

        localStorage.setItem('settings', JSON.stringify(settings));
        displayCurrentSettings(settings);
    }

    function displayCurrentSettings(settings) {
        currentSettingsParagraph.innerHTML = `
            <strong>Nombre de la Tienda:</strong> ${settings.storeName} <br>
            <strong>Moneda:</strong> ${settings.currency} <br>
            <strong>Notificaciones:</strong> ${settings.notifications === 'enabled' ? 'Habilitado' : 'Deshabilitado'} <br>
            <strong>Tema:</strong> ${settings.theme === 'light' ? 'Claro' : 'Oscuro'}
        `;
    }
});
