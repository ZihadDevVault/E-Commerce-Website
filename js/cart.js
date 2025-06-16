// cart.js

document.addEventListener("DOMContentLoaded", () => {
  // products data - অবশ্যই products.js এর সাথে একই ডাটা রাখতে হবে
  const products = [
    { id: 1, name: "Laptop Pro X", price: 1200, image: "img/laptop.jpg" },
    { id: 2, name: "Wireless Headphones", price: 150, image: "img/headphones.jpg" },
    { id: 3, name: "Smartphone Ultra", price: 899, image: "img/phone.jpg" },
    { id: 4, name: "Smart Watch S2", price: 299, image: "img/watch.jpg" }
  ];

  // localStorage থেকে কার্ট ডাটা নিয়ে আসা (না থাকলে খালি অ্যারে)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // কার্ট থেকে প্রোডাক্টের তথ্য পেতে ফাংশন
  function getProductById(id) {
    return products.find(p => p.id === id);
  }

  // কার্ট UI আপডেট ফাংশন
  function renderCart() {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalEl.textContent = "0";
      checkoutBtn.disabled = true;
      return;
    }

    checkoutBtn.disabled = false;

    let total = 0;
    cartItemsContainer.innerHTML = "";

    cart.forEach(item => {
      const product = getProductById(item.id);
      if (!product) return;

      const subTotal = product.price * item.quantity;
      total += subTotal;

      const div = document.createElement("div");
      div.className = "d-flex align-items-center border rounded p-3 mb-3";

      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 80px; height: 80px; object-fit: cover;" class="me-3 rounded" />
        <div class="flex-grow-1">
          <h5>${product.name}</h5>
          <p class="mb-1">$${product.price} x ${item.quantity} = $${subTotal.toFixed(2)}</p>
          <input type="number" min="1" value="${item.quantity}" class="form-control w-25 quantity-input" data-id="${item.id}" />
        </div>
        <button class="btn btn-danger btn-sm ms-3 remove-btn" data-id="${item.id}">Remove</button>
      `;

      cartItemsContainer.appendChild(div);
    });

    cartTotalEl.textContent = total.toFixed(2);
  }

  // quantity change handler
  cartItemsContainer.addEventListener("input", (e) => {
    if (e.target.classList.contains("quantity-input")) {
      const id = Number(e.target.dataset.id);
      const newQuantity = Number(e.target.value);

      if (newQuantity < 1) {
        e.target.value = 1;
        return;
      }

      const cartItem = cart.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity = newQuantity;
        saveCart();
        renderCart();
      }
    }
  });

  // remove button handler
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const id = Number(e.target.dataset.id);
      cart = cart.filter(item => item.id !== id);
      saveCart();
      renderCart();
    }
  });

  // প্রথমে কার্ট রেন্ডার করান
  renderCart();

  // Checkout button এ ক্লিক করলে alert দেখাবো (আপনি এখানে রিডাইরেক্ট করতে পারেন)
  checkoutBtn.addEventListener("click", () => {
    alert("Checkout process is not implemented. This is a demo.");
  });
});
