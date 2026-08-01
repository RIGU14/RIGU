console.log("RIGU Working");

fetch("products.json")
  .then(res => res.json())
  .then(products => {

    const productGrid = document.querySelector(".product-grid");

    productGrid.innerHTML = "";

    products.forEach(product => {

      // ਖਾਲੀ ਜਾਂ ਗਲਤ ਪ੍ਰੋਡਕਟ ਛੱਡੋ
      if (!product.title || product.title === "nan") return;
      if (!product.image || product.image === "nan") return;

      productGrid.innerHTML += `
        <div class="product-card">

          <img src="${product.image}" alt="${product.title}">

          <h3>${product.title}</h3>

          <p class="price">
            ₹${product.price && product.price !== "nan" ? product.price : "0"}
          </p>

          <div class="buttons">
            <button class="cart-btn">🛒 Add to Cart</button>
            <button class="buy-btn">⚡ Buy Now</button>
          </div>

        </div>
      `;

    });

  })
  .catch(err => {
    console.error(err);
    alert("Products Load Error");
  });
