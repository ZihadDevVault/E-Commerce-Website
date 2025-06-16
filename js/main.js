import { MyProducts } from "./produtArry.js"; 

const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const productContainer = document.getElementById("product-grid");

let filteredProducts = [...MyProducts];

// Render products to UI
function renderProducts(products) {
  productContainer.innerHTML = "";

  if (products.length === 0) {
    productContainer.innerHTML = `<p class="text-danger">No products found.</p>`;
    return;
  }

  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow">
          <img src="${product.image}" class="card-img-top" alt="${product.name}" />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description.slice(0, 80)}...</p>
            <h6 class="text-primary">৳${product.price}</h6>
            <a href="./Pages/product-details.html?id=${product.id}" class="btn btn-sm btn-success">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Search filter
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  filteredProducts = MyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  applySort();
});

// Sort filter
sortSelect.addEventListener("change", applySort);

function applySort() {
  const sortValue = sortSelect.value;
  if (sortValue === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  
  renderProducts(filteredProducts);
}

// Initial render
renderProducts(MyProducts);
