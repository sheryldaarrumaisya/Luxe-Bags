function addToCart(name, price, quantity = 1) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Cari produk yang sudah ada di keranjang
    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        // Jika produk sudah ada, tambahkan quantity
        existingProduct.quantity += quantity;
    } else {
        // Jika produk belum ada, tambahkan produk baru dengan quantity 1
        cart.push({ name, price, quantity, selected: false });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}