document.addEventListener("DOMContentLoaded", () => {
  const turnosContainer = document.getElementById("turnosContainer");

  // Get user-specific data from local storage
  const loggedInUser = JSON.parse(localStorage.getItem("UsuarioLogeado"));

  // Check if a user is logged in
  if (loggedInUser) {
    // Get the saved turnos data for the logged-in user from local storage
    let userTurnos = localStorage.getItem(loggedInUser.email);
    userTurnos = userTurnos ? JSON.parse(userTurnos) : [];

    // Mapping arrays for services and hours
    const servicios = [
      "Seleccione el servicio",
      "Blanqueamiento",
      "Limpieza Bucal",
      "Ortodoncia",
      "Anestecia Moderna",
      "Calculos Dentales",
      "Paradontosis",
      "Implantes Dentales",
      "Aparatos Dentales",
    ];

    const horarios = [
      "Seleccione el horario",
      "8:00 - 9:00",
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "12:00 - 13:00",
      "13:00 - 14:00",
      "14:00 - 15:00",
      "15:00 - 16:00",
      "16:00 - 17:00",
      "17:00 - 18:00",
      "18:00 - 19:00",
    ];

    // Loop through the saved turnos and create cards for each turno
    userTurnos.forEach((turnoData, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "w-100", "mb-3");

      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = `Turno ${index + 1}`;

      const cardContentDiv = document.createElement("div");
      cardContentDiv.classList.add("d-flex");

      const contentLeftDiv = document.createElement("div");
      contentLeftDiv.classList.add("w-100");

      // Create the "Paciente" section
      const pacienteDiv = document.createElement("div");
      pacienteDiv.classList.add("d-flex");
      const pacienteLabel = document.createElement("p");
      pacienteLabel.classList.add("card-text", "fw-semibold");
      pacienteLabel.innerHTML = "Paciente:&nbsp;";
      const pacienteValue = document.createElement("p");
      pacienteValue.classList.add("card-text");
      pacienteValue.textContent = `${turnoData.nombre} ${turnoData.apellido}`;
      pacienteDiv.appendChild(pacienteLabel);
      pacienteDiv.appendChild(pacienteValue);

      const fechaHorarioDoctorServicioRowDiv = document.createElement("div");
      fechaHorarioDoctorServicioRowDiv.classList.add("d-flex");

      // Create the "Fecha" section
      const fechaDiv = document.createElement("div");
      fechaDiv.classList.add("d-flex", "w-50");
      const fechaLabel = document.createElement("p");
      fechaLabel.classList.add("card-text", "fw-semibold");
      fechaLabel.innerHTML = "Fecha:&nbsp;";
      const fechaValue = document.createElement("p");
      fechaValue.classList.add("card-text");
      fechaValue.textContent = turnoData.fecha;
      fechaDiv.appendChild(fechaLabel);
      fechaDiv.appendChild(fechaValue);

      // Create the "Horario" section
      const horarioDiv = document.createElement("div");
      horarioDiv.classList.add("d-flex", "w-50");
      const horarioLabel = document.createElement("p");
      horarioLabel.classList.add("card-text", "fw-semibold");
      horarioLabel.innerHTML = "Horario:&nbsp;";
      const horarioValue = document.createElement("p");
      horarioValue.classList.add("card-text");
      horarioValue.textContent = horarios[turnoData.horarios];
      horarioDiv.appendChild(horarioLabel);
      horarioDiv.appendChild(horarioValue);

      // Create the "Doctor" section
      const doctorDiv = document.createElement("div");
      doctorDiv.classList.add("d-flex", "w-50");
      const doctorLabel = document.createElement("p");
      doctorLabel.classList.add("card-text", "fw-semibold");
      doctorLabel.innerHTML = "Doctor:&nbsp;";
      const doctorValue = document.createElement("p");
      doctorValue.classList.add("card-text");
      doctorValue.textContent = turnoData.doctores;
      doctorDiv.appendChild(doctorLabel);
      doctorDiv.appendChild(doctorValue);

      // Create the "Servicio" section
      const servicioDiv = document.createElement("div");
      servicioDiv.classList.add("d-flex", "w-50");
      const servicioLabel = document.createElement("p");
      servicioLabel.classList.add("card-text", "fw-semibold");
      servicioLabel.innerHTML = "Servicio:&nbsp;";
      const servicioValue = document.createElement("p");
      servicioValue.classList.add("card-text");
      servicioValue.textContent = servicios[turnoData.servicios];
      servicioDiv.appendChild(servicioLabel);
      servicioDiv.appendChild(servicioValue);

      fechaHorarioDoctorServicioRowDiv.appendChild(fechaDiv);
      fechaHorarioDoctorServicioRowDiv.appendChild(horarioDiv);
      fechaHorarioDoctorServicioRowDiv.appendChild(servicioDiv);
      fechaHorarioDoctorServicioRowDiv.appendChild(doctorDiv);

      // Create the "Motivo" section
      const motivoDiv = document.createElement("div");
      motivoDiv.classList.add("d-flex");
      const motivoLabel = document.createElement("p");
      motivoLabel.classList.add("card-text", "fw-semibold");
      motivoLabel.innerHTML = "Motivo de la consulta:&nbsp;";
      const motivoValue = document.createElement("p");
      motivoValue.classList.add("card-text");
      motivoValue.textContent = turnoData.motivo;
      motivoDiv.appendChild(motivoLabel);
      motivoDiv.appendChild(motivoValue);

      contentLeftDiv.appendChild(pacienteDiv);
      contentLeftDiv.appendChild(fechaHorarioDoctorServicioRowDiv);
      contentLeftDiv.appendChild(motivoDiv);

      const contentRightDiv = document.createElement("div");
      contentRightDiv.classList.add("d-flex", "flex-column");

      // Create the "Borrar" button
      const borrarButton = document.createElement("a");
      borrarButton.classList.add("btn", "btn-primary", "mb-2");
      borrarButton.href = "#";
      borrarButton.innerHTML = '<i class="fas fa-trash-alt"></i> Borrar';

      borrarButton.addEventListener("click", () => {
        // Show a confirmation dialog
        Swal.fire({
          title: "¿Estás seguro?",
          text: "¡Este turno será eliminado permanentemente!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, borrar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            // Remove the turno from userTurnos array
            userTurnos.splice(index, 1);

            // Update user-specific turnos in local storage
            localStorage.setItem(
              loggedInUser.email,
              JSON.stringify(userTurnos)
            );

            // Remove the card from the UI
            cardDiv.remove();

            // Show success alert
            Swal.fire({
              icon: "success",
              title: "Turno eliminado exitosamente",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });

      // Create the "Modificar" button
      const modificarButton = document.createElement("a");
      modificarButton.classList.add("btn", "btn-primary", "mt-2");
      modificarButton.href = "#";
      modificarButton.innerHTML = '<i class="fas fa-pencil-alt"></i> Modificar';

      contentRightDiv.appendChild(borrarButton);
      contentRightDiv.appendChild(modificarButton);

      cardContentDiv.appendChild(contentLeftDiv);
      cardContentDiv.appendChild(contentRightDiv);

      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardContentDiv);

      cardDiv.appendChild(cardBodyDiv);

      turnosContainer.appendChild(cardDiv);
    });
  } else {
    // Redirect to login page if no user is logged in
    window.location.href = "login.html";
  }
});
