document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting by default

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

  // Validate name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    isValid = false;
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required.");
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email.");
    isValid = false;
  }

  // Validate password
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, "Password is required.");
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  }
});

function showError(inputElement, message) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
