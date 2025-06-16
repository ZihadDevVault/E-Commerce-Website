// product-details.js
document.addEventListener("DOMContentLoaded", () => {
  // একই products array এখানে রাখতে হবে (অথবা আলাদা ফাইল থেকে import করতে পারেন)
const products = [
  {
    id: "laptop",
    name: "Laptop",
    price: 75000,
    image: "img/laptop.jpg",
    description: "A powerful and sleek laptop with Intel Core i7 processor, 16GB RAM, 512GB SSD, and a full HD 15.6” display. Ideal for professionals and students alike."
  },
  {
    id: "phone",
    name: "Smartphone",
    price: 40000,
    image: "img/phone.jpg",
    description: "Latest generation smartphone with a 6.7-inch OLED display, 128GB storage, dual-camera system, and long-lasting battery life. Available in multiple colors."
  },
  {
    id: "car",
    name: "Car Toy",
    price: 500,
    image: "img/car.jpg",
    description: "A durable and stylish miniature car toy made of non-toxic plastic. Great for children aged 3 and up. Pull-back mechanism included for fun play."
  },
  {
    id: "bike",
    name: "Bike Toy",
    price: 450,
    image: "img/bike.jpg",
    description: "Compact and colorful bike toy with realistic design. Encourages imaginative play and helps develop motor skills in children."
  },
  {
    id: "cycle",
    name: "Bicycle",
    price: 9000,
    image: "img/cycle.jpg",
    description: "Lightweight aluminum frame bicycle with dual disc brakes and 21-speed gear system. Suitable for city commuting and fitness riding."
  },
  {
    id: "books",
    name: "Books",
    price: 300,
    image: "img/books.jpg",
    description: "A set of bestselling educational books covering math, science, and language arts. Perfect for high school and college students."
  },
  {
    id: "pen",
    name: "Pen Set",
    price: 150,
    image: "img/pen.jpg",
    description: "Premium ballpoint pen set featuring 5 pens with smooth ink flow, comfortable grip, and elegant design. Ideal for daily writing tasks."
  },
  {
    id: "maltipug",
    name: "Maltipug Dog Toy",
    price: 800,
    image: "img/maltipug.jpg",
    description: "Adorable Maltipug stuffed toy made from ultra-soft plush fabric. Perfect cuddle companion for kids and dog lovers."
  },
  {
    id: "charger",
    name: "Mobile Charger",
    price: 1200,
    image: "img/charger.jpg",
    description: "High-speed mobile charger with dual USB output and smart chip for safe charging. Compatible with Android and iOS devices."
  },
  {
    id: "keyboard",
    name: "Keyboard",
    price: 2000,
    image: "img/keyboard.jpg",
    description: "Mechanical keyboard with tactile switches, customizable RGB lighting, and ergonomic wrist rest. Built for gaming and fast typing."
  },
  {
    id: "headphone",
    name: "Headphones",
    price: 2500,
    image: "img/headphone.jpg",
    description: "Over-ear Bluetooth headphones with active noise cancellation, built-in microphone, and up to 20 hours of battery life."
  },
  {
    id: "mouse",
    name: "Mouse",
    price: 900,
    image: "img/mouse.jpg",
    description: "Ergonomic wireless mouse with adjustable DPI settings and silent clicks. Ideal for office and gaming use."
  },
  {
    id: "pc",
    name: "Desktop PC",
    price: 55000,
    image: "img/pc.jpg",
    description: "High-performance desktop PC featuring AMD Ryzen 7 CPU, 16GB RAM, 1TB SSD, and NVIDIA RTX 3060 GPU. Perfect for gamers and professionals."
  }
];


  // URL থেকে product id নেওয়া
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  // প্রোডাক্ট খোঁজা
  const product = products.find(p => p.id == productId);

  // যদি প্রোডাক্ট না পাওয়া যায়
  if (!product) {
    document.getElementById("product-details").innerHTML = "<p class='text-danger'>Product not found!</p>";
    return;
  }

  // ডাইনামিক HTML
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

        <button onclick="addToCart(1, 1)" class="btn btn-success mt-2">Add to Cart</button>

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
