console.log("RIGU Loaded");

fetch("products.json")
  .then(response => response.json())
  .then(products => {

    const grid = document.querySelector(".product-grid");
    grid.innerHTML = "";

    products.forEach(product => {

      if (!product.title) return;

      grid.innerHTML += `
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

    console.log(products.length + " Products Loaded");

  })
  .catch(error => console.log(error));
