document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const strengthBar = document.querySelector('.strength-bar');
  const strengthFeedback = document.querySelector('.strength-feedback span');

  // Toggle password visibility for both fields
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function () {
      const input = this.parentNode.querySelector('input');
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.querySelector('i').classList.toggle('fa-eye-slash');
      this.querySelector('i').classList.toggle('fa-eye');
    });
  });

  // Password strength checker
  passwordInput.addEventListener('input', function () {
    const password = this.value;
    const strength = checkPasswordStrength(password);

    // Update strength meter
    strengthBar.style.width = `${strength.score * 25}%`;

    // Update color and feedback
    if (strength.score < 2) {
      strengthBar.style.backgroundColor = 'var(--accent)';
      strengthFeedback.textContent = 'Weak';
      strengthFeedback.style.color = 'var(--accent)';
    } else if (strength.score < 4) {
      strengthBar.style.backgroundColor = 'var(--warning)';
      strengthFeedback.textContent = 'Medium';
      strengthFeedback.style.color = 'var(--warning)';
    } else {
      strengthBar.style.backgroundColor = 'var(--success)';
      strengthFeedback.textContent = 'Strong';
      strengthFeedback.style.color = 'var(--success)';
    }
  });

  // Form submission
  signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Remove any existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
      existingAlert.remove();
    }

    // Validate form
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showAlert('Please fill in all fields', 'danger');
      return;
    }

    if (!validateEmail(email)) {
      showAlert('Please enter a valid email address', 'danger');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Passwords do not match', 'danger');
      return;
    }

    if (password.length < 8) {
      showAlert('Password must be at least 8 characters', 'danger');
      return;
    }

    if (!agreeTerms) {
      showAlert('You must agree to the terms and conditions', 'danger');
      return;
    }

    // Show loading state
    const signupBtn = document.querySelector('.signup-btn');
    const originalText = signupBtn.innerHTML;
    signupBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Creating account...';
    signupBtn.disabled = true;

    try {
      // Make API call to backend
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };

      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const result = await response.json();

      if (result.success) {
        showAlert('Account created successfully! Redirecting to login...', 'success');
        // Redirect to login page with email pre-filled
        setTimeout(() => {
          window.location.href = `login.html?email=${encodeURIComponent(result.email)}`;
        }, 2000);
      } else {
        showAlert(result.error || 'Signup failed', 'danger');
        signupBtn.innerHTML = originalText;
        signupBtn.disabled = false;
      }
    } catch (error) {
      console.error('Signup error:', error);

      // Provide specific error messages based on the error type
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        showAlert('Cannot connect to server. Please check if the backend is running on port 5000.', 'danger');
      } else if (error.message.includes('Failed to fetch')) {
        showAlert('Network error. Please check your internet connection and try again.', 'danger');
      } else {
        showAlert('An unexpected error occurred. Please try again.', 'danger');
      }

      signupBtn.innerHTML = originalText;
      signupBtn.disabled = false;
    }
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Password strength checker function
  function checkPasswordStrength(password) {
    let score = 0;

    // Length
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Complexity
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return { score };
  }

  // Show alert message
  function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.appendChild(document.createTextNode(message));
    signupForm.insertBefore(alertDiv, signupForm.firstChild);

    // Remove alert after 8 seconds for network errors
    const timeout = type === 'danger' ? 8000 : 5000;
    setTimeout(() => {
      alertDiv.remove();
    }, timeout);
  }
});