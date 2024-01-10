var horasInput = document.getElementById("horas");
var minutosInput = document.getElementById("minutos");
var segundosInput = document.getElementById("segundos");
var elementoTiempo = document.getElementById("tiempo");

function actualizarTiempo() {
  var horas = horasInput.value;
  var minutos = minutosInput.value;
  var segundos = segundosInput.value;

  elementoTiempo.textContent =
    (horas < 10 ? "0" + horas : horas) +
    ":" +
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" +
    (segundos < 10 ? "0" + segundos : segundos) +
    ":";
}

horasInput.addEventListener("input", actualizarTiempo);
