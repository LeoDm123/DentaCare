//VOLVER A PACIENTEODOCTOR
document.addEventListener("DOMContentLoaded", function () {
  const volverButtonDoctor = document.querySelector(
    "#RegistroDoctor .modal-footer .btn-primary"
  );

  volverButtonDoctor.addEventListener("click", function () {
    // Close the current modal
    const registroDoctorModal = new bootstrap.Modal(
      document.getElementById("RegistroDoctor")
    );
    registroDoctorModal.hide();

    // Open the previous modal
    const pacienteoDoctorModal = new bootstrap.Modal(
      document.getElementById("PacienteoDoctor")
    );
    pacienteoDoctorModal.show();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const volverButtonPaciente = document.querySelector(
    "#RegistroPaciente .modal-footer .btn-primary"
  );

  volverButtonPaciente.addEventListener("click", function () {
    // Close the current modal
    const registroPacienteModal = new bootstrap.Modal(
      document.getElementById("RegistroPaciente")
    );
    registroPacienteModal.hide();

    // Open the previous modal
    const pacienteoDoctorModal = new bootstrap.Modal(
      document.getElementById("PacienteoDoctor")
    );
    pacienteoDoctorModal.show();
  });
});
