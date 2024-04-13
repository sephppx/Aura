// JavaScript

const products = [
    { id: 1, name: 'Producto 1', price: 42.990 },
    { id: 2, name: 'Producto 2', price: 40.000 },
    { id: 3, name: 'Producto 3', price: 42.000 },
    { id: 4, name: 'Producto 4', price: 'Agotado' },
    { id: 5, name: 'Producto 5', price: 50.000 },
    { id: 6, name: 'Producto 6', price: 35.000 },
    { id: 7, name: 'Producto 7', price: 41.000 },
    { id: 8, name: 'Producto 8', price: 55.000 },
    { id: 9, name: 'Producto 9', price: 28.990 },
    { id: 10, name: 'Producto 10', price: 42.000 },
    { id: 11, name: 'Producto 11', price: 42.000 },
    { id: 12, name: 'Producto 12', price: 30.000 },
];

let cartItems = [];

function addToCart(productId) {
    const selectedProduct = findProductById(productId);

    const isProductInCart = checkIfProductInCart(selectedProduct);

    if (isProductInCart) {
        updateCartItemQuantity(selectedProduct);
    } else {
        addProductToCart(selectedProduct);
    }
    updateCartUI();

    console.log("Producto agregado al carrito:", productId);
}

function findProductById(productId) {
    return products.find(product => product.id === productId);
}

function checkIfProductInCart(product) {
    return cartItems.some(item => item.id === product.id);
}

function addProductToCart(product) {
    cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
    });
}

function updateCartItemQuantity(product) {
    const cartItem = cartItems.find(item => item.id === product.id);
    if (cartItem) {
        cartItem.quantity++;
    }
}

function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');

    cartCountElement.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
}