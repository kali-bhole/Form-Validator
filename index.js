const nameI = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("cnf-password");
const signUp = document.getElementById("sign-up");

signUp.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("p-name").textContent = "";
  document.getElementById("p-email").textContent = "";
  document.getElementById("p-password").textContent = "";
  document.getElementById("p-cnf-password").textContent = "";

  let valid = true;

  if (nameI.value.length > 20 || nameI.value.length < 2) {
    document.getElementById("p-name").textContent =
      "Username must contain 2 to 20 characters.";
    valid = false;
  }

  if (!email.value.includes("@") || !email.value.includes(".") || email.value.indexOf("@") === 0 || email.value.lastIndexOf(".") < email.value.indexOf("@") || email.value.endsWith(".")
  ) {
    document.getElementById("p-email").textContent =
      "Please enter a valid email address.";
    valid = false;
  }

  if (password.value.length < 8) {
    document.getElementById("p-password").textContent =
      "Password must be at least 8 characters long.";
    valid = false;
  }

  if (password.value !== cnfPassword.value) {
    document.getElementById("p-cnf-password").textContent =
      "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    console.log("Form submitted successfully");
  }
});
