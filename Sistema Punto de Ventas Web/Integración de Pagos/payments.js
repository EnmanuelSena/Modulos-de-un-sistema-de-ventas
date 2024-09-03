document.addEventListener('DOMContentLoaded', function () {
    const processPaymentButton = document.getElementById('processPayment');
    const amountInput = document.getElementById('amount');
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const statusMessage = document.getElementById('statusMessage');

    processPaymentButton.addEventListener('click', processPayment);

    function processPayment() {
        const amount = parseFloat(amountInput.value);
        const paymentMethod = paymentMethodSelect.value;

        if (isNaN(amount) || amount <= 0) {
            statusMessage.textContent = 'Por favor, ingrese un monto válido.';
            statusMessage.style.color = 'red';
            return;
        }

        // Llamar a la API de la pasarela de pagos
        // Esto es solo un ejemplo. Deberías reemplazarlo con una integración real.
        fakePaymentApi(amount, paymentMethod)
            .then(response => {
                if (response.success) {
                    statusMessage.textContent = 'Pago procesado exitosamente.';
                    statusMessage.style.color = 'green';
                } else {
                    statusMessage.textContent = 'Error al procesar el pago.';
                    statusMessage.style.color = 'red';
                }
            })
            .catch(error => {
                statusMessage.textContent = 'Error de conexión.';
                statusMessage.style.color = 'red';
            });
    }

    // Función simulada para el ejemplo (debería reemplazarse con una llamada real a la API)
    function fakePaymentApi(amount, method) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true });
            }, 1000);
        });
    }
});
