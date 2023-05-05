function validateForm() {
  const username = document.getElementById("input_username").value;
  const password = document.getElementById("input_password").value;
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  if (username.trim() === "" && password.trim() === "") {
    usernameError.innerHTML = "Masukkan Username dengan benar!";
    passwordError.innerHTML = "Masukkan Password dengan benar!";
    return false;
  }

  if (username.trim() === "") {
    usernameError.innerHTML = "Masukkan Username dengan benar!";
    return false;
  }

  if (password.trim() === "") {
    passwordError.innerHTML = "Masukkan Password dengan benar!";
    return false;
  }

  // Here you can add your code to check if the username and password are valid
  // For example, you can make an AJAX request to a server-side script to check if the credentials are valid

  return true;
}
