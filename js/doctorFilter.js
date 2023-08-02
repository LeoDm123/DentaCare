document.addEventListener("DOMContentLoaded", function () {
  const diaSelect = document.getElementById("fecha"); // Corrected ID name
  const horariosSelect = document.getElementById("horarios");
  const serviciosSelect = document.getElementById("servicios");
  const doctoresSelect = document.getElementById("doctores");

  const doctores = [
    {
      nombre: "Luis Figueroa",
      horarios: [1, 2, 3, 7, 8, 9, 10, 11],
      servicios: [1, 2, 3, 6],
      diasTrabajo: [0, 1, 2, 3, 4],
    },
    {
      nombre: "Aaron Huetagoyena",
      horarios: [1, 2, 3, 4, 5],
      servicios: [4, 5, 6, 7],
      diasTrabajo: [0, 2, 4, 5],
    },
    {
      nombre: "Valentina Tincani",
      horarios: [6, 7, 8, 9, 10, 11],
      servicios: [1, 2, 3, 4, 5, 6],
      diasTrabajo: [1, 3, 5],
    },
    {
      nombre: "Francisco Giuoptionano",
      horarios: [1, 2, 3, 4, 5],
      servicios: [1, 2, 4, 5, 6],
      diasTrabajo: [0, 1, 2, 3, 4],
    },
    {
      nombre: "Leandro Meiners",
      horarios: [1, 2, 3, 7, 8, 9, 10, 11],
      servicios: [1, 3, 6, 7, 8],
      diasTrabajo: [0, 1, 2, 4, 5],
    },
  ];

  function updateDoctorList() {
    const selectedDia = new Date(diaSelect.value).getDay(); // Get day of the week (0-6)
    const selectedHorario = parseInt(horariosSelect.value);
    const selectedServicio = parseInt(serviciosSelect.value);

    console.log(selectedDia, selectedHorario, selectedServicio);

    const filteredDoctores = doctores.filter(
      (doctor) =>
        doctor.diasTrabajo.includes(selectedDia) &&
        doctor.horarios.includes(selectedHorario) &&
        doctor.servicios.includes(selectedServicio)
    );

    doctoresSelect.innerHTML = "";

    filteredDoctores.forEach((doctor) => {
      const option = document.createElement("option");
      option.value = doctor.nombre;
      option.textContent = doctor.nombre;
      doctoresSelect.appendChild(option);
    });
  }

  diaSelect.addEventListener("change", updateDoctorList);
  horariosSelect.addEventListener("change", updateDoctorList);
  serviciosSelect.addEventListener("change", updateDoctorList);

  updateDoctorList();
});
