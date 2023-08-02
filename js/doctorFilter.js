document.addEventListener("DOMContentLoaded", function () {
  const horariosSelect = document.getElementById("horarios");
  const serviciosSelect = document.getElementById("servicios");
  const doctoresSelect = document.getElementById("doctores");

  const doctores = [
    {
      nombre: "Luis Figueroa",
      horarios: [1, 2, 3, 7, 8, 9, 10, 11],
      servicios: [1, 2, 3, 6],
    },
    {
      nombre: "Aaron Huetagoyena",
      horarios: [1, 2, 3, 4, 5],
      servicios: [4, 5, 6, 7],
    },
    {
      nombre: "Valentina Tincani",
      horarios: [6, 7, 8, 9, 10, 11],
      servicios: [1, 2, 3, 4, 5, 6],
    },
    {
      nombre: "Francisco Giuoptionano",
      horarios: [1, 2, 3, 4, 5],
      servicios: [1, 2, 4, 5, 6],
    },
    {
      nombre: "Leandro Meiners",
      horarios: [1, 2, 3, 7, 8, 9, 10, 11],
      servicios: [1, 3, 6, 7, 8],
    },
    // ... Add more doctors with their horarios and servicios
  ];

  function updateDoctorList() {
    const selectedHorario = horariosSelect.value;
    const selectedServicio = serviciosSelect.value;

    const filteredDoctores = doctores.filter(
      (doctor) =>
        doctor.horarios.includes(parseInt(selectedHorario)) &&
        doctor.servicios.includes(parseInt(selectedServicio))
    );

    // Clear the current options
    while (doctoresSelect.firstChild) {
      doctoresSelect.removeChild(doctoresSelect.firstChild);
    }

    // Add filtered doctors to the select options
    filteredDoctores.forEach((doctor) => {
      const option = document.createElement("option");
      option.value = doctor.nombre;
      option.textContent = doctor.nombre;
      doctoresSelect.appendChild(option);
    });
  }

  horariosSelect.addEventListener("change", updateDoctorList);
  serviciosSelect.addEventListener("change", updateDoctorList);
});
