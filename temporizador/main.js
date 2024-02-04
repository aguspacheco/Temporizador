var horasInput = document.getElementById("horas");
var minutosInput = document.getElementById("minutos");
var segundosInput = document.getElementById("segundos");
var elementoTiempo = document.getElementById("reloj");
var tiempo;
var intervalo;

function actualizarTiempo() {
  var horas = parseInt(horasInput.value, 10) || 0;
  var minutos = parseInt(minutosInput.value, 10) || 0;
  var segundos = parseInt(segundosInput.value, 10) || 0;

  tiempo = horas * 3600 + minutos * 60 + segundos;

  elementoTiempo.textContent =
    (horas < 10 ? "0" + horas : horas) +
    ":" +
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" +
    (segundos < 10 ? "0" + segundos : segundos);
}

horasInput.addEventListener("input", actualizarTiempo);
minutosInput.addEventListener("input", actualizarTiempo);
segundosInput.addEventListener("input", actualizarTiempo);

function iniciarTiempo() {
  actualizarTiempo();
  

  if (tiempo <= 0) {
    alert("Por favor ingrese al menos un valor");
    return;
  }

  intervalo = setInterval(function () {
    tiempo--;

    if (tiempo < 0) {
      clearInterval(intervalo);
      alert("El tiempo llego a cero!!!");
      return;
    }

    var horas = Math.floor(tiempo / 3600);
    var minutos = Math.floor((tiempo % 3600) / 60);
    var segundos = tiempo % 60;

    elementoTiempo.textContent =
      (horas < 10 ? "0" + horas : horas) +
      ":" +
      (minutos < 10 ? "0" + minutos : minutos) +
      ":" +
      (segundos < 10 ? "0" + segundos : segundos);

    if (tiempo <= 0) {
      clearInterval(intervalo);
      alert("⚠ El tiempo llego a cero!!!");
    }
  }, 1000);
}

function cancelarTiempo() {
  clearInterval(intervalo);
  horasInput.value = 0;
  minutosInput.value = 0;
  segundosInput.value = 0;

  actualizarTiempo();
}

document.getElementById("cancelar").addEventListener("click", cancelarTiempo);

document.getElementById("inicio").addEventListener("click", iniciarTiempo);
