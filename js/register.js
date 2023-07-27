// Function to handle form submission
function validarUsuario(e) {
    e.preventDefault();
  
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
  
    // Perform validation checks here (e.g., empty fields, password match, etc.)
  
    // Create an object to hold user information
    const user = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password,
    };
  
    // Get existing users from local storage (if any)
    let existingUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    // Check if the user already exists based on email
    const existingUser = existingUsers.find((u) => u.email === email);
    if (existingUser) {
      Swal.fire({
        icon: "error",
        title: "Usuario existente",
        text: "Lo siento, el usuario que ha agregado ya está registrado",
        footer: "",
      });
      return;
    }
  
    // Add the new user to the existing users
    existingUsers.push(user);
  
    // Save the updated users array back to local storage
    localStorage.setItem("usuarios", JSON.stringify(existingUsers));
  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario registrado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  
    // Reset the form after successful registration
    document.getElementById("formRegistro").reset();
  }
  
  // Add event listener to the form
  const formRegistro = document.querySelector("#formRegistro");
  formRegistro.addEventListener("submit", validarUsuario);
  