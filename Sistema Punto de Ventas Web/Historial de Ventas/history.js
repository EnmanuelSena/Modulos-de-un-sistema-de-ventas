finalizeSaleButton.addEventListener('click', function () {
    if (cart.length > 0) {
        if (confirm('¿Deseas finalizar la venta?')) {
            localStorage.setItem('products', JSON.stringify(products));
            
            let salesHistory = JSON.parse(localStorage.getItem('salesHistory')) || [];
            
            const newSale = {
                date: new Date().toLocaleString(),
                products: cart,
                total: parseFloat(totalAmount.textContent.slice(1)) // Remover el signo de dólar y convertir a número
            };
            
            salesHistory.push(newSale);
            localStorage.setItem('salesHistory', JSON.stringify(salesHistory));

            alert('Venta finalizada');
            cart = [];
            renderCart();
        }
    } else {
        alert('El carrito está vacío');
    }
});
