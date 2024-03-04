// Obtiene las referencias a los elementos
let horasInput = document.getElementById("horas");
let minutosInput = document.getElementById("minutos");
let segundosInput = document.getElementById("segundos");
let elementoTiempo = document.getElementById("reloj");
let tiempo;
let intervalo;

/* Actualiza el tiempo en el elemento de visualización.*/
function actualizarTiempo() {
  // Obtiene los valores de las horas, minutos y segundos.
  const horas = parseInt(horasInput.value, 10) || 0;
  const minutos = parseInt(minutosInput.value, 10) || 0;
  const segundos = parseInt(segundosInput.value, 10) || 0;

  // Calcula el tiempo total en segundos
  tiempo = horas * 3600 + minutos * 60 + segundos;

  // Formatea y muestra el tiempo en el elemento de visualización.
  const formattedHoras = horas < 10 ? `0${horas}` : horas;
  const formattedMinutos = minutos < 10 ? `0${minutos}` : minutos;
  const formattedSegundos = segundos < 10 ? `0${segundos}` : segundos;

  elementoTiempo.textContent = `${formattedHoras}:${formattedMinutos}:${formattedSegundos}`;
}

/* Inicia el contador de tiempo y muestra una alerta en caso contrario*/
function iniciarTiempo() {
  // Actualiza el tiempo según la entrada del usuario.
  actualizarTiempo();

  // Verifica si el tiempo es válido para iniciar.
  if (
    tiempo <= 0 ||
    (horasInput.value === "0" && minutosInput.value === "0" && segundosInput.value === "0")
  ) {
    alert("Por favor ingrese al menos un valor diferente de 0");
    return;
  }

  // Configura el intervalo para actualizar el tiempo cada segundo.
  intervalo = setInterval(function () {
    tiempo--;

    // Verificar si el tiempo llego a cero.
    if (tiempo < 0) {
      // Detiene el intervalo y muestra una alerta.
      clearInterval(intervalo);
      alert("El tiempo llegó a cero!!!");
      return;
    }

    // Calcula las horas, minutos y segundos restantes.
    let horas = Math.floor(tiempo / 3600);
    let minutos = Math.floor((tiempo % 3600) / 60);
    let segundos = tiempo % 60;

    // Formatea y muestra el tiempo en el elemento de visualización.
    elementoTiempo.textContent =
      (horas < 10 ? "0" + horas : horas) +
      ":" +
      (minutos < 10 ? "0" + minutos : minutos) +
      ":" +
      (segundos < 10 ? "0" + segundos : segundos);

    // Verifica si el tiempo llego a cero nuevamente.
    if (tiempo <= 0) {
      // Detiene el intervalo y mostrar una alerta.
      clearInterval(intervalo);
      alert("⚠ El tiempo llegó a cero!!!");
    }
  }, 1000);
}

/* Cancela el contador de tiempo y reinicia los valores.*/
function cancelarTiempo() {
  // Detiene el intervalo y reinicia los valores a cero.
  clearInterval(intervalo);
  horasInput.value = "";
  minutosInput.value = "";
  segundosInput.value = "";

  // Actualiza el tiempo en el elemento de visualización.
  actualizarTiempo();
}

//eventos para los botones de cancelar e iniciar
document.getElementById("cancelar").addEventListener("click", cancelarTiempo);
document.getElementById("inicio").addEventListener("click", iniciarTiempo);
