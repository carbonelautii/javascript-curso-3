const btn = document.querySelector("#button");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const div = document.querySelector("#results");

btn.addEventListener("click", calcularDescuento);

function calcularDescuento(event) {
  // (P * (100 - D)) / 100
  event.preventDefault();

  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    alert("Por favor, completa los campos vacios!");
    return;
  }
  let discount;

  // LOGICA CON SWITCH (BORRAR COMENTADO PARA TESTEAR)

  /*
  switch (coupon) {
    case "CUPON1":
      discount = 30;
      break;

    case "CUPON2":
      discount = 25;
      break;

    default:
      break;
  }
*/

  // LOGICA CON IF & ELSE (BORRAR COMENTADO PARA TESTEAR)
  /*
  if (coupon == "CUPON1") {
    discount = 30;
  } else if (coupon == "CUPON2") {
    discount = 25;
  } else {
    div.innerText = "El nuevo precio con descuento es $" + resultadoFinal;
    return;
  }
*/
  const resultadoFinal = (price * (100 - discount)) / 100;

  div.innerText = "El nuevo precio con descuento es $" + resultadoFinal;
}
