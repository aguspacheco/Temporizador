let horasInput = document.getElementById("horas");
let minutosInput = document.getElementById("minutos");
let segundosInput = document.getElementById("segundos");
let elementoTiempo = document.getElementById("reloj");
let tiempo;
let intervalo;

function actualizarTiempo() {
  const horas = parseInt(horasInput.value, 10) || 0;
  const minutos = parseInt(minutosInput.value, 10) || 0;
  const segundos = parseInt(segundosInput.value, 10) || 0;

  tiempo = horas * 3600 + minutos * 60 + segundos;

  const formattedHoras = horas < 10 ? `0${horas}` : horas;
  const formattedMinutos = minutos < 10 ? `0${minutos}` : minutos;
  const formattedSegundos = segundos < 10 ? `0${segundos}` : segundos;

  elementoTiempo.textContent = `${formattedHoras}:${formattedMinutos}:${formattedSegundos}`;
}

function iniciarTiempo() {
  actualizarTiempo();

  if (
    tiempo <= 0 ||
    (horasInput.value === "0" && minutosInput.value === "0" && segundosInput.value === "0")
  ) {
    alert("⚠Por favor ingrese al menos un valor⚠");
    return null;
  }

  intervalo = setInterval(function () {
    tiempo--;

    if (tiempo < 0) {
      clearInterval(intervalo);
      alert("El tiempo llegó a cero!!!");
      return;
    }

    let horas = Math.floor(tiempo / 3600);
    let minutos = Math.floor((tiempo % 3600) / 60);
    let segundos = tiempo % 60;

    elementoTiempo.textContent =
      (horas < 10 ? "0" + horas : horas) +
      ":" +
      (minutos < 10 ? "0" + minutos : minutos) +
      ":" +
      (segundos < 10 ? "0" + segundos : segundos);

    if (tiempo <= 0) {
      clearInterval(intervalo);
      alert("⚠ El tiempo llegó a cero!!!");
    }
  }, 1000);
}

function cancelarTiempo() {
  clearInterval(intervalo);
  horasInput.value = "";
  minutosInput.value = "";
  segundosInput.value = "";

  actualizarTiempo();
}

document.getElementById("cancelar").addEventListener("click", cancelarTiempo);
document.getElementById("inicio").addEventListener("click", iniciarTiempo);
