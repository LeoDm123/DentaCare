document.addEventListener("DOMContentLoaded", function () {
  const diaSelect = document.getElementById("fecha"); // Corrected ID name
  const horariosSelect = document.getElementById("horarios");
  const serviciosSelect = document.getElementById("servicios");
  const doctoresSelect = document.getElementById("doctores");

  const doctoresExistentes = JSON.parse(localStorage.getItem("Doctores"));

  console.log(doctoresExistentes);

  function updateDoctorList() {
    const selectedDia = new Date(diaSelect.value).getDay(); // Get day of the week (0-6)
    const selectedHorario = parseInt(horariosSelect.value);
    const selectedServicio = parseInt(serviciosSelect.value);

    const filteredDoctores = doctoresExistentes.filter((doctor) => {
      const diasTrabajo = doctor.DiasTrabajo.map(Number); // Convert strings to numbers
      const horarios = doctor.Horarios.map(Number); // Convert strings to numbers
      const servicios = doctor.Servicios.map(Number); // Convert strings to numbers

      return (
        diasTrabajo.includes(selectedDia) &&
        horarios.includes(selectedHorario) &&
        servicios.includes(selectedServicio)
      );
    });

    doctoresSelect.innerHTML = "";

    filteredDoctores.forEach((doctor) => {
      const option = document.createElement("option");
      const nombreApellido = `${doctor.nombre} ${doctor.apellido}`;
      option.value = nombreApellido;
      option.textContent = nombreApellido;
      doctoresSelect.appendChild(option);
    });
  }

  diaSelect.addEventListener("change", updateDoctorList);
  horariosSelect.addEventListener("change", updateDoctorList);
  serviciosSelect.addEventListener("change", updateDoctorList);

  updateDoctorList();
});
