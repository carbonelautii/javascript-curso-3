const btn = document.querySelector("#button");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const div = document.querySelector("#results");

btn.addEventListener("click", calcularDescuento);

function calcularDescuento(event) {
  // (P * (100 - D)) / 100
  event.preventDefault();

  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  if (!price || !discount) {
    alert("Por favor, completa los campos vacios!");
    return;
  }

  if (discount > 100) {
    alert(
      "No es posible descontar un " +
        discount +
        "%." +
        " Por favor, ingrese un descuento valido."
    );
  }

  const resultadoFinal = (price * (100 - discount)) / 100;

  div.innerText = "El nuevo precio con descuento es $" + resultadoFinal;
}
