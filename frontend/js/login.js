document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const togglePassword = document.querySelector('.toggle-password');
  const passwordInput = document.getElementById('password');

  // Toggle password visibility
  togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye-slash');
    this.querySelector('i').classList.toggle('fa-eye');
  });

  // Form submission
  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Remove any existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
      existingAlert.remove();
    }

    // Simple validation
    if (!email || !password) {
      showAlert('Please fill in all fields', 'danger');
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      showAlert('Please enter a valid email address', 'danger');
      return;
    }

    // Show loading state
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Logging in...';
    loginBtn.disabled = true;

    try {
      // Make API call to backend
      const loginData = {
        email: email,
        password: password
      };

      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const result = await response.json();

      if (result.success) {
        showAlert('Login successful! Redirecting to dashboard...', 'success');

        // Store login state (in a real app, you would use proper session management)
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('userEmail', email);
          localStorage.setItem('userData', JSON.stringify(result.user));
        } else {
          sessionStorage.setItem('userEmail', email);
          sessionStorage.setItem('userData', JSON.stringify(result.user));
        }

        // Redirect to dashboard after delay
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
      } else {
        showAlert(result.error || 'Invalid email or password', 'danger');
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;
      }
    } catch (error) {
      console.error('Login error:', error);

      // Provide specific error messages based on the error type
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        showAlert('Cannot connect to server. Please check if the backend is running on port 5000.', 'danger');
      } else if (error.message.includes('Failed to fetch')) {
        showAlert('Network error. Please check your internet connection and try again.', 'danger');
      } else {
        showAlert('An unexpected error occurred. Please try again.', 'danger');
      }

      loginBtn.innerHTML = originalText;
      loginBtn.disabled = false;
    }
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Show alert message
  function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.appendChild(document.createTextNode(message));
    loginForm.insertBefore(alertDiv, loginForm.firstChild);

    // Remove alert after 8 seconds for network errors
    const timeout = type === 'danger' ? 8000 : 5000;
    setTimeout(() => {
      alertDiv.remove();
    }, timeout);
  }

  // Check for remembered email
  if (localStorage.getItem('rememberMe')) {
    const rememberedEmail = localStorage.getItem('userEmail');
    if (rememberedEmail) {
      document.getElementById('email').value = rememberedEmail;
      document.getElementById('rememberMe').checked = true;
    }
  }

  // Auto-fill email from URL if present
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('email')) {
    document.getElementById('email').value = decodeURIComponent(urlParams.get('email'));
  }
});