document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if user is in the "Doctores" database
    const doctoresDB = JSON.parse(localStorage.getItem("Doctores")) || [];
    const doctor = doctoresDB.find(
      (user) => user.email === email && user.password === password
    );

    // Check if user is in the "Pacientes" database
    const pacientesDB = JSON.parse(localStorage.getItem("Pacientes")) || [];
    const paciente = pacientesDB.find(
      (user) => user.email === email && user.password === password
    );

    if (doctor) {
      localStorage.setItem("UsuarioLogeado", JSON.stringify(doctor));
      window.location.href = "dashDoctor.html";
    } else if (paciente) {
      localStorage.setItem("UsuarioLogeado", JSON.stringify(paciente));
      window.location.href = "dashPaciente.html";
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de inicio de sesión",
        text: "Las credenciales son incorrectas. Inténtelo de nuevo.",
        footer: "",
      });
    }
  });
