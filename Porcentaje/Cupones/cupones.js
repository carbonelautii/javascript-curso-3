const btn = document.querySelector("#button");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const div = document.querySelector("#results");

btn.addEventListener("click", calcularDescuento);

const couponList = [];
couponList.push({
  name: "CUPON1",
  discount: 30,
});
couponList.push({
  name: "CUPON2",
  discount: 20,
});
couponList.push({
  name: "CUPON3",
  discount: 10,
});

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

  function isCouponInArray(couponElement) {
    // {name, discount}
    return couponElement.name == coupon;
  }

  const couponInArray = couponList.find(isCouponInArray); // {}

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    div.innerText = "El cupón no es válido!";
    return;
  }

  console.log({
    coupon,
    discount,
    couponInArray,
    couponList,
  });

  // --------------------------------------------------------------------------------
  // LOGICA CON OBJECT (BORRAR COMENTADO PARA TESTEAR)
  // const couponObj = {
  //   CUPON1: 30,
  //   CUPON2: 15,
  //   CUPON3: 10,
  // };

  // if (couponObj[coupon]) {
  //   discount = couponObj[coupon];
  // } else {
  // div.innerText = "El nuevo precio con descuento es $" + resultadoFinal;
  // return;
  // }
  // --------------------------------------------------------------------------------
  // LOGICA CON SWITCH (BORRAR COMENTADO PARA TESTEAR)

  // switch (coupon) {
  //   case "CUPON1":
  //     discount = 30;
  //     break;

  //   case "CUPON2":
  //     discount = 25;
  //     break;

  //   default:
  //     break;
  // }
  // --------------------------------------------------------------------------------
  // LOGICA CON IF & ELSE (BORRAR COMENTADO PARA TESTEAR)

  // if (coupon == "CUPON1") {
  //   discount = 30;
  // } else if (coupon == "CUPON2") {
  //   discount = 25;
  // } else {
  // div.innerText = "El nuevo precio con descuento es $" + resultadoFinal;
  // return;
  // }
  // --------------------------------------------------------------------------------
  const resultadoFinal = (price * (100 - discount)) / 100;
  div.innerText = "El nuevo precio con descuento es $" + resultadoFinal;
}
