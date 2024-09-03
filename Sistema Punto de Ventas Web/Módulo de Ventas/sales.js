document.addEventListener('DOMContentLoaded', function () {
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const cartTable = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
    const totalAmount = document.getElementById('totalAmount');
    const finalizeSaleButton = document.getElementById('finalizeSale');

    let products = JSON.parse(localStorage.getItem('products')) || [];
    let cart = [];

    function renderProducts() {
        productTable.innerHTML = '';

        products.forEach((product, index) => {
            const row = productTable.insertRow();
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.brand}</td>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td><input type="number" min="1" max="${product.quantity}" value="1" id="quantity-${index}"></td>
                <td><button onclick="addToCart(${index})">Añadir al Carrito</button></td>
            `;
        });
    }

    function renderCart() {
        cartTable.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const row = cartTable.insertRow();
            const subtotal = item.price * item.quantity;
            total += subtotal;
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.brand}</td>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button onclick="removeFromCart(${index})">Eliminar</button></td>
            `;
        });

        totalAmount.textContent = `$${total.toFixed(2)}`;
    }

    window.addToCart = function (index) {
        const quantityInput = document.getElementById(`quantity-${index}`);
        const quantity = parseInt(quantityInput.value);

        if (quantity > 0 && quantity <= products[index].quantity) {
            const existingIndex = cart.findIndex(item => item.name === products[index].name);
            if (existingIndex > -1) {
                cart[existingIndex].quantity += quantity;
            } else {
                cart.push({
                    name: products[index].name,
                    brand: products[index].brand,
                    price: products[index].price,
                    quantity: quantity
                });
            }

            products[index].quantity -= quantity;
            renderProducts();
            renderCart();
        } else {
            alert('Cantidad no válida');
        }
    }

    window.removeFromCart = function (index) {
        const productIndex = products.findIndex(product => product.name === cart[index].name);
        products[productIndex].quantity += cart[index].quantity;
        cart.splice(index, 1);
        renderProducts();
        renderCart();
    }

    finalizeSaleButton.addEventListener('click', function () {
        if (cart.length > 0) {
            if (confirm('¿Deseas finalizar la venta?')) {
                localStorage.setItem('products', JSON.stringify(products));
                alert('Venta finalizada');
                cart = [];
                renderCart();
            }
        } else {
            alert('El carrito está vacío');
        }
    });

    renderProducts();
    renderCart();
});
