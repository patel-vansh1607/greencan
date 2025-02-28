const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login form");
    const registerForm = document.querySelector(".register form");
  
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const username = registerForm.querySelector("input[type='text']").value.trim();
      const email = registerForm.querySelector("input[type='email']").value.trim();
      const password = registerForm.querySelector("input[type='password']").value.trim();
  
      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Save user details in Local Storage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  
      alert("Registration successful! Now login.");
      window.location.href = "home.html";
    });
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const username = loginForm.querySelector("input[type='text']").value.trim();
      const password = loginForm.querySelector("input[type='password']").value.trim();
  
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");
  
      if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  });
  
  