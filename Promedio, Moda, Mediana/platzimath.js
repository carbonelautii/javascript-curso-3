function esPar(array) {
  return !(array.length % 2);
}
function esImpar(array) {
  return array.length % 2;
}

function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    if (valorAcumulado > nuevoValor) {
      return 1;
    } else if (valorAcumulado == 0) {
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      return -1;
    }

    return valorAcumulado - nuevoValor; // Resumir condicional,
    // 10 - 5: 5 (Numero positivo (Retorna "1"))
    // 5 - 5: 0 (Retorna "0")
    // 5 - 10: -5 (Numero negativo (Retorna "-1"))
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}

function calcularMediana(array) {
  const listaEsPar = esPar(array);

  if (listaEsPar) {
    const indexMitad1ListaPar = array.length / 2 - 1;
    const indexMitad2ListaPar = array.length / 2;

    const listaMitades = [];
    listaMitades.push(array[indexMitad1ListaPar]);
    listaMitades.push(array[indexMitad2ListaPar]);
    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(array.length / 2); // ARRAY[10,20,30,40,50,60,70,80,90,100,110]
    const medianaListaImpar = array[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(array) {
  // --------------------------------------------------------
  // FORMA DE CALCULAR PROMEDIO CON UN CICLO FOR
  // let sumaArray = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sumaArray = sumaArray + array[i];
  // }
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // FORMA DE CALCULAR PROMEDIO CON UNA FUNCION
  // function sumarElementos(valorAcumulado, nuevoValor) {
  //   return valorAcumulado + nuevoValor;
  // }
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // FORMA DE CALCULAR PROMEDIO CON UNA ARROW FUNCTION
  const sumarElementos = (valorAcumulado, nuevoValor) => {
    return valorAcumulado + nuevoValor;
  };
  const sumaArray = array.reduce(sumarElementos);
  /* Podemos resumir un poco el codigo sacando los corchetes, haciendo eso hace un return automatico.
    const sumarElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
  };
  */
  // ---------------------------------------------------------
  const promedio = sumaArray / array.length;
  // console.log(promedio);
  return promedio;
}
