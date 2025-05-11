document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, quantity: 1, selected: false });
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}