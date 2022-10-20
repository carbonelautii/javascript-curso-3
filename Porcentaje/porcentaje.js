const btn = document.querySelector("#button");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const div = document.querySelector("#results");

btn.addEventListener("click", calcularDescuento);

function calcularDescuento(event) {
  // (P * (100 - D)) / 100
  event.preventDefault();

  const price = inputPrice.value;
  const discount = inputDiscount.value;

  const resultadoFinal = (price * (100 - discount)) / 100;

  div.innerText = "El nuevo precio con descuento es $" + resultadoFinal;
}
