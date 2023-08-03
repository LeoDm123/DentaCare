// Function to handle user log out
function logoutUser() {
  // Clear user-specific data from local storage
  localStorage.removeItem("UsuarioLogeado");

  // Redirect to the login page
  window.location.href = "login.html";
}

// Get the "Cerrar Sesión" link element
const logoutLink = document.querySelector(".nav-link[data-toggle='modal']");

// Add click event listener to the logout link
logoutLink.addEventListener("click", logoutUser);
