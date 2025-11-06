// ==================== HERO SLIDER ====================
let slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

if (slides.length > 0) {
  setInterval(showNextSlide, 5000); // changes every 5 seconds
}

// ==================== CART FUNCTIONALITY ====================

// Selectors
let cart = [];
const cartSection = document.getElementById("cart-section");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");

// Open and close cart
cartBtn?.addEventListener("click", () => {
  cartSection?.classList.add("active");
});
closeCartBtn?.addEventListener("click", () => {
  cartSection?.classList.remove("active");
});

// Add to cart button (alert demo)
document.querySelectorAll('.cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert(`${button.previousElementSibling?.previousElementSibling?.textContent || 'Item'} added to cart!`);
  });
});

// Add item to cart programmatically
function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

// Render cart
function renderCart() {
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <p>${item.name} - GHS ${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">❌</button>
      </div>
    `;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

// Remove from cart
function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

// ==================== USER AUTH (SIGNUP & LOGIN) ====================

// --- Handle Signup ---
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name')?.value;
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;

  if (!name || !email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Signup successful! You can now login.');
  window.location.href = 'login.html';
});

// --- Handle Login ---
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail')?.value;
  const password = document.getElementById('loginPassword')?.value;
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert(`Welcome back, ${storedUser.name}!`);
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }
});

// ==================== START SHOPPING BUTTON ====================
document.querySelector('.shop-btn')?.addEventListener('click', () => {
  window.location.href = "packages.html";
});
