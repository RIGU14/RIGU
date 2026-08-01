console.log("RIGU Loaded");

let allProducts = [];
let currentIndex = 0;
const PRODUCTS_PER_LOAD = 24;

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    loadProducts();
  });

function loadProducts() {

  const grid = document.querySelector(".product-grid");

  for (let i = currentIndex; i < currentIndex + PRODUCTS_PER_LOAD && i < allProducts.length; i++) {

    const p = allProducts[i];

    if (!p.title) continue;

    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">₹${p.price}</p>

        <div class="buttons">
          <button class="cart-btn">🛒 Add to Cart</button>
          <button class="buy-btn">⚡ Buy Now</button>
        </div>
      </div>
    `;
  }

  currentIndex += PRODUCTS_PER_LOAD;
}
