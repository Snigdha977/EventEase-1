document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  // Get user input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Save data to local storage (for simplicity, as no backend is involved)
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password); 

  // Redirect to the main event management page (index.html)
  window.location.href = "index.html";
});
