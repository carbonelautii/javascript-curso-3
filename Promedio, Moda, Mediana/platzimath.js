function calcularPromedio(array) {
  let sumaArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumaArray = sumaArray + array[i];
  }

  const promedio = sumaArray / array.length;
  console.log(promedio);
  return promedio;
}
