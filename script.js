// Obtener elementos del DOM
//const verDetallesButton = document.getElementById('verDetalles');
function voltearTarjeta1() {
    const verDetallesButton = document.getElementById("verDetalles");
    tarjeta.classList.toggle("volteada");
  }
  function voltearTarjeta2() {
    const volverButton = document.getElementById("volver");
    tarjeta.classList.toggle("volteada");
  }


//const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
// Función para voltear la tarjeta
// Función para volver a la cara frontal