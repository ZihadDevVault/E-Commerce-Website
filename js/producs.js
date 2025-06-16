import {MyProducts} from './produtArry.js';
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");




  MyProducts.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class='h-100 d-flex align-items-center justify-content-center '><img src="${product.image}" class="card-img" alt="${product.name}" /></div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text text-muted">$${product.price}</p>
          <a href="./products-details.html?id=${product.id}" class="btn btn-sm btn-outline-primary mt-auto">View Details</a>
        </div>
      </div>
    `;

    productGrid.appendChild(col);
  });
});
