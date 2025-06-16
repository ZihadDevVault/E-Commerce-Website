import {MyProducts} from './produtArry.js';

// product-details.js
document.addEventListener("DOMContentLoaded", () => {
 




  
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

 
  const product = MyProducts.find(p => p.id == productId);

  if (!product) {
    document.getElementById("product-details").innerHTML = "<p class='text-danger'>Product not found!</p>";
    return;
  }

 
  document.getElementById("product-details").innerHTML = `
    <div class="row g-4">
      <div class="col-md-6">
        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded" />
      </div>
      <div class="col-md-6">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <h4 class="text-primary">$${product.price}</h4>

        <div class="my-3">
          <label for="quantity" class="form-label">Quantity:</label>
          <input type="number" id="quantity" class="form-control w-25" value="1" min="1" />
        </div>

        <button onclick="addToCart(${product.id})" class="btn btn-success mt-2">Add to Cart</button>

      </div>
    </div>
  `;
});


function addToCart(productId, quantity = 1) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "./cart.html";
}
