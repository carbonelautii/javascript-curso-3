// class PlatziMath {
//   static esPar() {}
//   static esImpar() {}
//   static calcularMediana() {}
// }

const PlatziMath = {};

PlatziMath.esPar = function esPar(array) {
  return !(array.length % 2);
};
PlatziMath.esImpar = function esImpar(array) {
  return array.length % 2;
};

PlatziMath.calcularModa = function calcularModa(array) {
  const listaCount = {};

  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  // console.log({
  //   listaCount,
  //   listaArray,
  //   listaOrdenada,
  //   listaMaxNumber,
  // });
  return moda;
};

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const array = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(array);

  if (listaEsPar) {
    const indexMitad1ListaPar = array.length / 2 - 1;
    const indexMitad2ListaPar = array.length / 2;
    const listaMitades = [];
    listaMitades.push(array[indexMitad1ListaPar]);
    listaMitades.push(array[indexMitad2ListaPar]);

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(array.length / 2); // ARRAY[10,20,30,40,50,60,70,80,90,100,110]
    const medianaListaImpar = array[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
};

PlatziMath.calcularPromedio = function calcularPromedio(array) {
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
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }
  const sumaArray = array.reduce(sumarTodosElementos);
  /* Podemos resumir un poco el codigo sacando los corchetes, haciendo eso hace un return automatico.
    const sumarElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
  };
  */
  // ---------------------------------------------------------
  const promedio = sumaArray / array.length;
  // console.log(promedio);
  return promedio;
};

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if (valorAcumulado == 0) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }

    // CONDICIONAL RESUMIDO
    return valorAcumulado - nuevoValor;
    // 10 - 5: 5 (Numero positivo (Retorna "1"))
    // 5 - 5: 0 (Retorna "0")
    // 5 - 10: -5 (Numero negativo (Retorna "-1"))
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
};

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(
  listaDesordenada,
  i
) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
};

elementos[(1, 2, 3, 4, 5, 6, 7, 8, 9)];
// length = elementos[0,1,2,3,4,5,6,7,8]

elementos[elementos.length * 50];
