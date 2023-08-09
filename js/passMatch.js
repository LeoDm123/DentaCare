const passwordFieldPaciente = document.getElementById("passwordPaciente");
const confirmPasswordFieldPaciente = document.getElementById(
  "confirmPasswordPaciente"
);

confirmPasswordFieldPaciente.addEventListener("input", () => {
  if (confirmPasswordFieldPaciente.value !== passwordFieldPaciente.value) {
    confirmPasswordFieldPaciente.setCustomValidity(
      "Las contraseñas no coinciden"
    );
  } else {
    confirmPasswordFieldPaciente.setCustomValidity("");
  }
});

const passwordFieldDoctor = document.getElementById("passwordDoctor");
const confirmPasswordFieldDoctor = document.getElementById(
  "confirmPasswordDoctor"
);

confirmPasswordFieldDoctor.addEventListener("input", () => {
  if (confirmPasswordFieldDoctor.value !== passwordFieldDoctor.value) {
    confirmPasswordFieldDoctor.setCustomValidity(
      "Las contraseñas no coinciden"
    );
  } else {
    confirmPasswordFieldDoctor.setCustomValidity("");
  }
});
