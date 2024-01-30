var horasInput = document.getElementById("horas");
var minutosInput = document.getElementById("minutos");
var segundosInput = document.getElementById("segundos");
var elementoTiempo = document.getElementById("reloj");
var tiempo;
var intervalo;
var iniciarBtn = document.getElementById("inicio");
var cancelarBtn = document.getElementById("cancelar");
var contenedor = document.querySelector(".contenedor");

function actualizarTiempo() {
  var horas = parseInt(horasInput.value, 10) || 0;
  var minutos = parseInt(minutosInput.value, 10) || 0;
  var segundos = parseInt(segundosInput.value, 10) || 0;

  if (horas < 0 || minutos < 0 || segundos < 0) {
    alert("Por favor, ingrese valores no negativos para horas, minutos y segundos.");
    horasInput.value = 0;
    minutosInput.value = 0;
    segundosInput.value = 0;
  }

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
    alert(
      "Por favor, ingrese valores válidos para horas, minutos y segundos antes de iniciar el temporizador."
    );
    return;
  }

  // Ocultar elementos
  iniciarBtn.style.display = "none";
  cancelarBtn.style.display = "none";
  horasInput.style.display = "none";
  minutosInput.style.display = "none";
  segundosInput.style.display = "none";

  // Mostrar el reloj
  elementoTiempo.style.display = "block";

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

function cancelarTiempo() {
  clearInterval(intervalo);
  horasInput.value = 0;
  minutosInput.value = 0;
  segundosInput.value = 0;

  // Mostrar elementos nuevamente
  iniciarBtn.style.display = "block";
  cancelarBtn.style.display = "block";
  horasInput.style.display = "inline-block";
  minutosInput.style.display = "inline-block";
  segundosInput.style.display = "inline-block";

  // Ocultar el reloj
  elementoTiempo.style.display = "none";

  actualizarTiempo();
}

document.getElementById("cancelar").addEventListener("click", cancelarTiempo);

document.getElementById("inicio").addEventListener("click", iniciarTiempo);
