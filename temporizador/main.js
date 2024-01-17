var horasInput = document.getElementById("horas");
var minutosInput = document.getElementById("minutos");
var segundosInput = document.getElementById("segundos");
var elementoTiempo = document.getElementById("reloj");
var tiempo;
var intervalo;

function actualizarTiempo() {
  var horas = horasInput.value;
  var minutos = minutosInput.value;
  var segundos = segundosInput.value;

  tiempo = horas * 3600 + minutos * 60 + segundos;

  elementoTiempo.textContent =
    (horas < 10 ? "0" + horas : horas) +
    ":" +
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" +
    (segundos < 10 ? "0" + segundos : segundos);
}

function iniciarTiempo() {
  actualizarTiempo();

  intervalo = setInterval(function () {
    tiempo--;

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
    }
  }, 1000);
}

horasInput.addEventListener("input", actualizarTiempo);
minutosInput.addEventListener("input", actualizarTiempo);
segundosInput.addEventListener("input", actualizarTiempo);

document.getElementById("inicio").addEventListener("click", iniciarTiempo);
