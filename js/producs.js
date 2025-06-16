import { MyProducts } from './produtArry.js';
import { produtcard } from './productcard.js';

document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  let filteredProducts = [...MyProducts];

  function renderFilteredProducts() {
    productGrid.innerHTML = ""; 
    if (filteredProducts.length === 0) {
      productGrid.innerHTML = `<p class="text-danger">No products found.</p>`;
    } else {
      produtcard(filteredProducts, productGrid);
    }
  }

  // Search filter
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = MyProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    applySort(); // sort filtered results
  });

  // Sort handler
  sortSelect.addEventListener("change", applySort);

  function applySort() {
    const sortValue = sortSelect.value;
    if (sortValue === "low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    renderFilteredProducts();
  }

  // Initial render
  renderFilteredProducts();
});
