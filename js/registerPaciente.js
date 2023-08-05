document
  .getElementById("formRegistroPaciente")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    saveFormData(); // Call the saveFormData function
  });

// Function to save form data to local storage
function saveFormData() {
  const nombre = document.getElementById("nombrePaciente").value;
  const apellido = document.getElementById("apellidoPaciente").value;
  const email = document.getElementById("emailPaciente").value;
  const telefono = document.getElementById("telefonoPaciente").value;
  const password = document.getElementById("passwordPaciente").value;
  const obraSocial = document.getElementById("obraSocialPaciente").value;
  const numeroAfiliado = document.getElementById(
    "numeroAfiliadoPaciente"
  ).value;

  // Check if user is already registered as a Doctor
  const doctoresExistentes = JSON.parse(localStorage.getItem("Doctores")) || [];
  const DoctorRegistrado = doctoresExistentes.some(
    (user) => user.email === email
  );

  if (DoctorRegistrado) {
    Swal.fire({
      icon: "error",
      title: "El email ya está registrado como doctor",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // Check if user is already registered as a Patient
  const pacientesExistentes =
    JSON.parse(localStorage.getItem("Pacientes")) || [];
  const PacienteRegistrado = pacientesExistentes.some(
    (user) => user.email === email
  );

  if (PacienteRegistrado) {
    Swal.fire({
      icon: "error",
      title: "El email ya está registrado con otra cuenta",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // Create an object to represent the new patient data
  const nuevoPaciente = {
    nombre,
    apellido,
    email,
    telefono,
    password,
    obraSocial,
    numeroAfiliado,
  };

  // Add the new patient data to the existing data array
  pacientesExistentes.push(nuevoPaciente);

  // Save the updated data back to local storage
  localStorage.setItem("Pacientes", JSON.stringify(pacientesExistentes));

  Swal.fire({
    icon: "success",
    title: "Usuario registrado correctamente",
    showConfirmButton: false,
    timer: 1500,
  });

  // Reset the form
  form.reset();
}
