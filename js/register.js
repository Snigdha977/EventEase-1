
// Grab form and message element
const form = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Reset message display and styling
  formMessage.style.display = 'none';
  formMessage.textContent = '';
  formMessage.classList.remove('error', 'success');
  
  // Retrieve input values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const termsChecked = document.getElementById('terms').checked;
  
  // Validate that no field is empty
  if (!fullName || !email || !password || !confirmPassword) {
    formMessage.textContent = 'Please fill in all required fields.';
    formMessage.classList.add('error');
    formMessage.style.display = 'block';
    return;
  }
  
  // Check that password fields match
  if (password !== confirmPassword) {
    formMessage.textContent = 'Passwords do not match.';
    formMessage.classList.add('error');
    formMessage.style.display = 'block';
    return;
  }
  
  // Validate terms acceptance
  if (!termsChecked) {
    formMessage.textContent = 'You must agree to the Terms & Conditions.';
    formMessage.classList.add('error');
    formMessage.style.display = 'block';
    return;
  }
  
  // Extra email format check (HTML5 handles basic validation already)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.classList.add('error');
    formMessage.style.display = 'block';
    return;
  }
  
  // If all validations pass, display success message
  formMessage.textContent = 'Registration successful!';
  formMessage.classList.add('success');
  formMessage.style.display = 'block';
  
  // Here you can also send the form data via AJAX for further processing...


// Add fade-out animation to the registration container
const container = document.querySelector('.registration-container');
container.classList.add('fade-out');

// Redirect to home.html after fade-out animation
setTimeout(() => {
  window.location.href = 'home.html';
}, 2000); 

});