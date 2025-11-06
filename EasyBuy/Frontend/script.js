document.querySelectorAll('.cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert(`${button.previousElementSibling.previousElementSibling.textContent} added to cart!`);
  });
});
let cart = [];
const cartSection = document.getElementById("cart-section");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");

cartBtn.addEventListener("click", () => {
  cartSection.classList.add("active"); // slide in
});

closeCartBtn.addEventListener("click", () => {
  cartSection.classList.remove("active"); // slide out
});

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
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

function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}
// Handle signup
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Signup successful! You can now login.');
  window.location.href = 'login.html';
});

// Handle login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }
});
