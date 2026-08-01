fetch("products.json")
.then(res => res.json())
.then(products => {

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

})
.catch(err => {
console.log(err);
alert("Products Load Error");
});
