const products = [
    { id: 1, name: "Classic White Shirt", price: 25, image: "https://via.placeholder.com/150/FFFFFF/000000?text=White+Shirt" },
    { id: 2, name: "Casual Blue Shirt", price: 30, image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue+Shirt" },
    { id: 3, name: "Striped Polo Shirt", price: 35, image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Striped+Polo" },
    { id: 4, name: "Checked Shirt", price: 40, image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Checked+Shirt" },
    { id: 5, name: "Floral Print Shirt", price: 28, image: "https://via.placeholder.com/150/DA70D6/FFFFFF?text=Floral+Print" },
    { id: 6, name: "Denim Shirt", price: 45, image: "https://via.placeholder.com/150/5F9EA0/FFFFFF?text=Denim+Shirt" },
    { id: 7, name: "Formal Black Shirt", price: 50, image: "https://via.placeholder.com/150/000000/FFFFFF?text=Black+Shirt" },
    { id: 8, name: "Light Green Shirt", price: 32, image: "https://via.placeholder.com/150/98FB98/000000?text=Green+Shirt" },
    { id: 9, name: "Yellow Summer Shirt", price: 22, image: "https://via.placeholder.com/150/FFFF00/000000?text=Yellow+Shirt" },
    { id: 10, name: "Purple Cotton Shirt", price: 29, image: "https://via.placeholder.com/150/800080/FFFFFF?text=Purple+Shirt" },
    { id: 11, name: "Hawaiian Beach Shirt", price: 38, image: "https://via.placeholder.com/150/20B2AA/FFFFFF?text=Hawaiian" },
    { id: 12, name: "Plaid Long Sleeve", price: 42, image: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Plaid+Shirt" },
    { id: 13, name: "Graphic Tee", price: 20, image: "https://via.placeholder.com/150/00008B/FFFFFF?text=Graphic+Tee" },
    { id: 14, name: "Slim Fit Shirt", price: 33, image: "https://via.placeholder.com/150/7FFF00/000000?text=Slim+Fit" },
    { id: 15, name: "Vintage Retro Shirt", price: 37, image: "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Retro+Shirt" },
    { id: 16, name: "Ombre Dyed Shirt", price: 36, image: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Ombre+Shirt" },
    { id: 17, name: "Short Sleeve Tee", price: 24, image: "https://via.placeholder.com/150/A52A2A/FFFFFF?text=Short+Tee" },
    { id: 18, name: "V-Neck Shirt", price: 27, image: "https://via.placeholder.com/150/2E8B57/FFFFFF?text=V-Neck+Shirt" },
    { id: 19, name: "Athletic Shirt", price: 31, image: "https://via.placeholder.com/150/000080/FFFFFF?text=Athletic+Shirt" },
    { id: 20, name: "Classic Black Tee", price: 34, image: "https://via.placeholder.com/150/696969/FFFFFF?text=Black+Tee" },
    { id: 21, name: "Graphic Print Shirt", price: 39, image: "https://via.placeholder.com/150/FF8C00/FFFFFF?text=Graphic+Print" },
    { id: 22, name: "Plain Pink Shirt", price: 23, image: "https://via.placeholder.com/150/FFC0CB/000000?text=Pink+Shirt" },
    { id: 23, name: "Tie-Dye Shirt", price: 30, image: "https://via.placeholder.com/150/ADFF2F/000000?text=Tie-Dye" },
    { id: 24, name: "Linen Casual Shirt", price: 44, image: "https://via.placeholder.com/150/D2691E/FFFFFF?text=Linen+Shirt" },
    { id: 25, name: "Longline T-Shirt", price: 26, image: "https://via.placeholder.com/150/B0C4DE/000000?text=Longline+Tee" },
    { id: 26, name: "Raglan Sleeve Shirt", price: 29, image: "https://via.placeholder.com/150/FF1493/FFFFFF?text=Raglan+Shirt" },
    { id: 27, name: "Baseball Tee", price: 35, image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Baseball+Tee" },
    { id: 28, name: "Henley Shirt", price: 41, image: "https://via.placeholder.com/150/FFD700/000000?text=Henley+Shirt" },
    { id: 29, name: "Patchwork Shirt", price: 47, image: "https://via.placeholder.com/150/800000/FFFFFF?text=Patchwork" },
    { id: 30, name: "Sleeveless Tank", price: 21, image: "https://via.placeholder.com/150/008080/FFFFFF?text=Tank+Top" }
];

const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const cartSection = document.getElementById('cart');
const cartItemsDiv = document.getElementById('cart-items');
let cart = [];

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        cartCount.textContent = cart.length;
        displayCartItems();
        alert(`${product.name} has been added to your cart.`);
    }
}

function toggleCart() {
    cartSection.style.display = (cartSection.style.display === "none" || cartSection.style.display === "") ? "block" : "none";
    displayCartItems();
}

function displayCartItems() {
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <input type="checkbox" id="item-${index}" class="cart-checkbox">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <p>${item.name} - $${item.price} (Qty: ${item.quantity})</p>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to checkout!");
}

function clearCart() {
    cart = [];
    cartCount.textContent = 0;
    displayCartItems();
    alert("Cart has been cleared!");
}

function clearSelected() {
    const checkboxes = document.querySelectorAll('.cart-checkbox:checked');
    checkboxes.forEach((checkbox) => {
        const index = checkbox.id.split('-')[1]; // Get the index from the checkbox ID
        cart.splice(index, 1); // Remove the item from the cart
    });
    cartCount.textContent = cart.length; // Update the cart count
    displayCartItems(); // Refresh the cart display
    alert("Selected items have been cleared!");
}

document.getElementById('cart-icon').onclick = toggleCart;
displayProducts();
