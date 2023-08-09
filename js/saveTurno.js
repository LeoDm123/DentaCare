// Get user-specific data from local storage
const UsuarioLogeado = JSON.parse(localStorage.getItem("UsuarioLogeado"));

// Check if a user is logged in
if (UsuarioLogeado) {
  // References to form elements
  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const fechaInput = document.getElementById("fecha");
  const horariosInput = document.getElementById("horarios");
  const serviciosInput = document.getElementById("servicios");
  const doctoresInput = document.getElementById("doctores");
  const motivoInput = document.getElementById("motivo");

  // Reference to the "Reservar Turno" button
  const reservarButton = document.querySelector(".modal-footer .btn-primary");

  // Add event listener to the "Reservar Turno" button
  reservarButton.addEventListener("click", () => {
    // Check if the form is valid before proceeding
    if (
      !nombreInput.checkValidity() ||
      !apellidoInput.checkValidity() ||
      !fechaInput.checkValidity() ||
      !horariosInput.checkValidity() ||
      !serviciosInput.checkValidity() ||
      !doctoresInput.checkValidity() ||
      !motivoInput.checkValidity()
    ) {
      Swal.fire({
        icon: "error",
        title: "Por favor, complete todos los campos",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Don't proceed with submission if form is not valid
    }

    // Create an object to store turno information
    const turnoData = {
      nombre: nombreInput.value,
      apellido: apellidoInput.value,
      fecha: fechaInput.value,
      horarios: horariosInput.value,
      servicios: serviciosInput.value,
      doctores: doctoresInput.value,
      motivo: motivoInput.value,
      email: UsuarioLogeado.email,
      estado: 0,
    };

    // Get existing turnos from local storage (if any)
    let turnos = JSON.parse(localStorage.getItem("Turnos")) || [];

    // Add the information of a new turno to existing turnos
    turnos.push(turnoData);

    // Save the updated turnos back to local storage
    localStorage.setItem("Turnos", JSON.stringify(turnos));

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Turno reservado exitosamente!",
      showConfirmButton: false,
      timer: 1500,
    });

    // Clear form fields
    nombreInput.value = "";
    apellidoInput.value = "";
    fechaInput.value = "";
    horariosInput.value = "0";
    serviciosInput.value = "0";
    doctoresInput.value = "0";
    motivoInput.value = "";

    setTimeout(() => {
      location.reload();
    }, 1000);
  });
} else {
  // Redirect to login page if no user is logged in
  window.location.href = "login.html";
}
