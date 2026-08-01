console.log("RIGU Version 2 Loaded");

const products = [
  {
    title: "Sports Shoes",
    price: 1499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    title: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  }
];

const productGrid = document.querySelector(".product-grid");

productGrid.innerHTML = "";

products.forEach(product => {

  productGrid.innerHTML += `
    <div class="product-card">

      <img src="${product.image}" alt="${product.title}">

      <h3>${product.title}</h3>

      <p class="price">₹${product.price}</p>

      <div class="buttons">
        <button class="cart-btn">🛒 Add to Cart</button>
        <button class="buy-btn">⚡ Buy Now</button>
      </div>

    </div>
  `;

});
