document.addEventListener('DOMContentLoaded', function () {
    const backupButton = document.getElementById('backupData');
    const restoreButton = document.getElementById('restoreSystem');
    const cleanButton = document.getElementById('cleanOldData');

    backupButton.addEventListener('click', backupData);
    restoreButton.addEventListener('click', restoreSystem);
    cleanButton.addEventListener('click', cleanOldData);

    function backupData() {
        alert('Funcionalidad de copia de seguridad aún no implementada.');
    }

    function restoreSystem() {
        alert('Funcionalidad de restauración aún no implementada.');
    }

    function cleanOldData() {
        alert('Funcionalidad de limpieza de datos obsoletos aún no implementada.');
    }
});
