document.addEventListener('DOMContentLoaded', function () {
    const saveSettingsButton = document.getElementById('saveSettings');
    const savePreferencesButton = document.getElementById('savePreferences');
    const siteNameInput = document.getElementById('siteName');
    const siteEmailInput = document.getElementById('siteEmail');
    const currencyInput = document.getElementById('currency');
    const userThemeSelect = document.getElementById('userTheme');
    const notificationsSelect = document.getElementById('notifications');

    saveSettingsButton.addEventListener('click', saveSettings);
    savePreferencesButton.addEventListener('click', savePreferences);

    function saveSettings() {
        const siteName = siteNameInput.value.trim();
        const siteEmail = siteEmailInput.value.trim();
        const currency = currencyInput.value.trim();

        if (!siteName || !siteEmail || !currency) {
            alert('Por favor, complete todos los campos de ajustes generales.');
            return;
        }

        // Simulación de guardar ajustes
        console.log(`Ajustes Generales Guardados:
        Nombre del Sitio: ${siteName}
        Correo Electrónico del Soporte: ${siteEmail}
        Moneda: ${currency}`);

        alert('Ajustes Generales Guardados Exitosamente');
    }

    function savePreferences() {
        const userTheme = userThemeSelect.value;
        const notifications = notificationsSelect.value;

        // Simulación de guardar preferencias
        console.log(`Preferencias de Usuario Guardadas:
        Tema: ${userTheme}
        Notificaciones: ${notifications}`);

        alert('Preferencias de Usuario Guardadas Exitosamente');
    }
});
