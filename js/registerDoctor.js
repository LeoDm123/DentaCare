document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formRegistroDoctor");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const nombre = document.getElementById("nombreDoctor").value;
    const apellido = document.getElementById("apellidoDoctor").value;
    const email = document.getElementById("emailDoctor").value;
    const telefono = document.getElementById("telefonoDoctor").value;
    const especialidad = document.getElementById("especialidad").value;
    const matricula = document.getElementById("matricula").value;
    const password = document.getElementById("passwordDoctor").value;

    // Check if user is already registered as a Doctor
    const doctoresExistentes =
      JSON.parse(localStorage.getItem("Doctores")) || [];
    const DoctorRegistrado = doctoresExistentes.some(
      (user) => user.email === email
    );

    if (DoctorRegistrado) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "El email ya está registrado con otra cuenta",
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
        position: "top-end",
        icon: "error",
        title: "El email ya está registrado como paciente",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // Get selected services
    const Servicios = [];
    document
      .querySelectorAll('input[name="servicios"]:checked')
      .forEach((checkbox) => {
        Servicios.push(checkbox.value);
      });

    // Get horarios
    const Horarios = [];
    document
      .querySelectorAll('input[name="horarios"]:checked')
      .forEach((checkbox) => {
        Horarios.push(checkbox.value);
      });

    // Get dias de trabajo
    const DiasTrabajo = [];
    document
      .querySelectorAll('input[name="diasTrabajo"]:checked')
      .forEach((checkbox) => {
        DiasTrabajo.push(checkbox.value);
      });

    // Create user object
    const nuevoDoctor = {
      nombre,
      apellido,
      email,
      telefono,
      especialidad,
      password,
      matricula,
      Servicios,
      Horarios,
      DiasTrabajo,
    };

    // Save user to local storage
    doctoresExistentes.push(nuevoDoctor);
    localStorage.setItem("Doctores", JSON.stringify(doctoresExistentes));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario registrado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });

    // Reset the form
    form.reset();
  });
});
