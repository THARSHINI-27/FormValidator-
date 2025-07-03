document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMessage");

  
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;


  if (!/^[A-Za-z ]{3,}$/.test(name)) {
    nameError.textContent = "Name must be at least 3 letters.";
    isValid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
    passwordError.textContent = "Password must be 6+ characters with letters and numbers.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Registration successful!";
    
    document.getElementById("registerForm").reset();
  }
});
