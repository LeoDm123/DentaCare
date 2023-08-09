document.addEventListener("DOMContentLoaded", () => {
  const turnosContainer = document.getElementById("turnosContainer");

  // Get user-specific data from local storage
  const loggedInUser = JSON.parse(localStorage.getItem("UsuarioLogeado"));

  // Check if a user is logged in
  if (loggedInUser) {
    // Get the saved turnos data for the logged-in user from local storage
    const userTurnosKey = loggedInUser.nombre + " " + loggedInUser.apellido;
    const allTurnos = JSON.parse(localStorage.getItem("Turnos")) || [];

    // Filter turnos where loggedInUser is the doctor
    const userDoctorTurnos = allTurnos.filter(
      (turno) => turno.doctores === userTurnosKey
    );

    console.log(loggedInUser.nombre && loggedInUser.apellido);
    console.log(userDoctorTurnos);

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
    userDoctorTurnos.forEach((turnoData, index) => {
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
      contentRightDiv.classList.add(
        "d-flex",
        "flex-column",
        "align-items-center",
        "justify-content-center"
      );

      if (turnoData.estado === 0) {
        // Create the "Aceptar" button
        const aceptarButton = document.createElement("a");
        aceptarButton.classList.add("btn", "btn-primary", "mb-2");
        aceptarButton.href = "#";
        aceptarButton.innerHTML = '<i class="fas fa-check"></i> Aceptar';

        aceptarButton.addEventListener("click", () => {
          Swal.fire({
            title: "¿Confirmar turno?",
            text: "¡Un mail de confirmación será enviado al paciente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, confirmar",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              // Find the index of the turno in the allTurnos array
              const turnoIndex = allTurnos.findIndex(
                (turno) => turno === turnoData
              );

              if (turnoIndex !== -1) {
                // Update the estado property of the turno
                allTurnos[turnoIndex].estado = 1; // Assuming 1 represents confirmed state

                // Update user-specific turnos in local storage
                localStorage.setItem("Turnos", JSON.stringify(allTurnos));

                Swal.fire({
                  icon: "success",
                  title: "Turno confirmado exitosamente",
                  text: "¡El paciente será debidamente informado!",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  // Hide the buttons and show the green indicator
                  aceptarButton.style.display = "none";
                  rechazarButton.style.display = "none";
                  const confirmedIndicator = document.createElement("p");
                  confirmedIndicator.classList.add(
                    "card-text",
                    "text-success",
                    "fw-semibold"
                  );
                  confirmedIndicator.textContent = "Turno confirmado";
                  contentRightDiv.appendChild(confirmedIndicator);
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "No se pudo encontrar el turno en los registros.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            }
          });
        });

        // Create the "Rechazar" button
        const rechazarButton = document.createElement("a");
        rechazarButton.classList.add("btn", "btn-danger", "mt-2");
        rechazarButton.href = "#";
        rechazarButton.innerHTML = '<i class="fas fa-times"></i> Rechazar';

        rechazarButton.addEventListener("click", () => {
          // Show a confirmation dialog
          Swal.fire({
            title: "¿Rechazar turno?",
            text: "¡Un mail de notificación será enviado al paciente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, rechazar",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              // Find the index of the turno in the allTurnos array
              const turnoIndex = allTurnos.findIndex(
                (turno) => turno === turnoData
              );

              if (turnoIndex !== -1) {
                // Remove the turno from allTurnos array
                allTurnos.splice(turnoIndex, 1);

                // Update user-specific turnos in local storage
                localStorage.setItem("Turnos", JSON.stringify(allTurnos));

                // Remove the card from the UI
                cardDiv.remove();

                // Show success alert
                Swal.fire({
                  icon: "success",
                  title: "Turno rechazado exitosamente",
                  text: "¡El paciente será debidamente informado!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                // Handle error (the turno was not found in allTurnos)
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "No se pudo encontrar el turno en los registros.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            }
          });
        });

        contentRightDiv.appendChild(aceptarButton);
        contentRightDiv.appendChild(rechazarButton);
      } else if (turnoData.estado === 1) {
        // Create and add the "Turno confirmado" indicator
        const confirmedIndicator = document.createElement("p");
        confirmedIndicator.classList.add(
          "card-text",
          "text-success",
          "fw-semibold"
        );
        confirmedIndicator.textContent = "Turno confirmado";
        contentRightDiv.appendChild(confirmedIndicator);
      }

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
