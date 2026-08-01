console.log("RIGU Loaded");

fetch("products.json")
  .then(response => response.json())
  .then(products => {

    const productGrid = document.querySelector(".product-grid");

    productGrid.innerHTML = "";

    products.slice(0, 30).forEach(product => {

      if (!product.title || product.title === "nan") return;
      if (!product.image || product.image === "nan") return;

      const price =
        product.price && product.price !== "nan"
          ? product.price
          : "0";

      productGrid.innerHTML += `
        <div class="product-card">

          <img src="${product.image}" alt="${product.title}">

          <h3>${product.title}</h3>

          <p class="price">₹${price}</p>

          <div class="buttons">
            <button class="cart-btn">🛒 Add to Cart</button>
            <button class="buy-btn">⚡ Buy Now</button>
          </div>

        </div>
      `;
    });

    console.log("30 Products Loaded Successfully");

  })
  .catch(error => {
    console.error(error);
    alert("Products Load Error");
  });
