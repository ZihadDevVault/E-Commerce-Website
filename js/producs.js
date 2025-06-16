// products.js
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");

  // প্রোডাক্টের তথ্য
  const products = [
  { id: "laptop", name: "Laptop", price: 75000, image: "img/laptop.jpg", description: "High-performance laptop for professionals." },
  { id: "phone", name: "Smartphone", price: 40000, image: "img/phone.jpg", description: "Latest smartphone with powerful features." },
  { id: "car", name: "Car Toy", price: 500, image: "img/car.jpg", description: "Miniature car toy for kids." },
  { id: "bike", name: "Bike Toy", price: 450, image: "img/bike.jpg", description: "Fun and fast bike toy." },
  { id: "cycle", name: "Bicycle", price: 9000, image: "img/cycle.jpg", description: "Sturdy and lightweight cycle." },
  { id: "books", name: "Books", price: 300, image: "img/books.jpg", description: "Educational books for students." },
  { id: "pen", name: "Pen Set", price: 150, image: "img/pen.jpg", description: "Smooth writing pen set." },
  { id: "maltipug", name: "Maltipug Dog Toy", price: 800, image: "img/maltipug.jpg", description: "Cute maltipug stuffed toy." },
  { id: "charger", name: "Mobile Charger", price: 1200, image: "img/charger.jpg", description: "Fast charging adapter." },
  { id: "keyboard", name: "Keyboard", price: 2000, image: "img/keyboard.jpg", description: "Mechanical keyboard with RGB." },
  { id: "headphone", name: "Headphones", price: 2500, image: "img/headphone.jpg", description: "Noise-cancelling headphones." },
  { id: "mouse", name: "Mouse", price: 900, image: "img/mouse.jpg", description: "Wireless optical mouse." },
  { id: "pc", name: "Desktop PC", price: 55000, image: "img/pc.jpg", description: "High-end desktop computer." }
];;

  // প্রোডাক্ট কার্ডগুলো তৈরি ও গ্রিডে ঢোকানো
  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
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
