document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const inventoryTable = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];

    let products = JSON.parse(localStorage.getItem('products')) || [];

    function renderInventory() {
        inventoryTable.innerHTML = '';

        products.forEach((product, index) => {
            const row = inventoryTable.insertRow();
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.brand}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td class="actions">
                    <button class="edit-btn" onclick="editProduct(${index})">Editar</button>
                    <button class="delete-btn" onclick="deleteProduct(${index})">Eliminar</button>
                </td>
            `;
        });
    }

    function addProduct(event) {
        event.preventDefault();
        const name = document.getElementById('productName').value;
        const brand = document.getElementById('productBrand').value;
        const price = document.getElementById('productPrice').value;
        const quantity = document.getElementById('productQuantity').value;

        products.push({ name, brand, price, quantity });
        localStorage.setItem('products', JSON.stringify(products));
        renderInventory();
        productForm.reset();
    }

    window.editProduct = function (index) {
        const product = products[index];
        document.getElementById('productName').value = product.name;
        document.getElementById('productBrand').value = product.brand;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productQuantity').value = product.quantity;

        productForm.onsubmit = function (event) {
            event.preventDefault();
            product.name = document.getElementById('productName').value;
            product.brand = document.getElementById('productBrand').value;
            product.price = document.getElementById('productPrice').value;
            product.quantity = document.getElementById('productQuantity').value;

            products[index] = product;
            localStorage.setItem('products', JSON.stringify(products));
            renderInventory();
            productForm.reset();

            // Volver a la función original de agregar producto
            productForm.onsubmit = addProduct;
        }
    }

    window.deleteProduct = function (index) {
        if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
            renderInventory();
        }
    }

    productForm.onsubmit = addProduct;
    renderInventory();
});
