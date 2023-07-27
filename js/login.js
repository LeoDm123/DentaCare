// Function to handle login form submission
function loginUser(e) {
    e.preventDefault();
  
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    // Get existing users from local storage (if any)
    const existingUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    // Check if the user exists based on email and password
    const user = existingUsers.find((u) => u.email === email && u.password === password);
  
    if (user) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Inicio de sesión exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
  
    window.location.href = "dashboard.html";   
     
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de inicio de sesión",
        text: "Las credenciales son incorrectas. Inténtelo de nuevo.",
        footer: "",
      });
    }
  }
  
  // Add event listener to the login form
  const loginForm = document.querySelector("#loginForm");
  loginForm.addEventListener("submit", loginUser);
  