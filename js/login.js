const signInForm = document.getElementById('signInForm');
const messageDiv = document.getElementById('message');

signInForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Reset message display
  messageDiv.style.display = 'none';
  messageDiv.textContent = '';
  messageDiv.classList.remove('error', 'success');
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  
  // Basic form validation
  if (!username || !password) {
    messageDiv.textContent = 'Please fill in all required fields.';
    messageDiv.classList.add('error');
    messageDiv.style.display = 'block';
    return;
  }
  
  // Simulate successful sign in
  messageDiv.textContent = 'Sign in successful! Redirecting...';
  messageDiv.classList.add('success');
  messageDiv.style.display = 'block';
  
  // Trigger fade-out animation of the container
  const container = document.querySelector('.registration-container');
  container.classList.add('fade-out');
  
  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 2000);
});