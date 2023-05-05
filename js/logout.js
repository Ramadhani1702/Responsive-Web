const logoutBtn = document.getElementById("btnLogout");
logoutBtn.addEventListener("click", logout);

function logout() {
  // Clear any authentication information or session data
  // For example, remove the user's access token or session ID from local storage

  // Display a message to the user
  const message = document.createElement("div");
  message.innerText = "You have been logged out.";
  document.body.appendChild(message);

  // Redirect the user to the login page after a short delay
  setTimeout(function () {
    window.location.href = "login.html";
  }, 2000);
}
