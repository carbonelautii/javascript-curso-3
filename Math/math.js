//Cuadrados
console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

console.groupEnd("Cuadrado");

// Triangulos
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lado1, base) {
  if (lado1 == base) {
    console.warn("Este no es un triángulo isosceles");
  } else {
    // H = raizCuadrada (lado1**2 - (b**2)/4)
    return Math.sqrt(lado1 ** 2 - base ** 2 / 4);
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
});

console.groupEnd("Triangulo");

// Circulos
console.group("Circle");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI;

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);

  return {
    circunferencia: diametro * Math.PI.toFixed(3),
    area: radioAlCuadrado * Math.PI.toFixed(3),
  };
}

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

console.groupEnd("Circle");

function calcularAlturaTrianguloEscaleno(lado1, lado2, base) {
  if (lado1 == lado2 || lado2 == base || base == lado1) {
    console.warn("Esto no es un triángulo Escaleno");
  } else {
    // semiPerimetro = (lado1 + lado2 + base) / 2
    const semiPerimetro = (lado1 + lado2 + base) / 2;
    // h = (2 / lado1) * raizCuadrada (semiPerimetro(semiperimetro-lado1) * (semiPerimetro(semiperimetro-lado2) * (semiPerimetro(semiperimetro-lado3) )
    const altura =
      (2 / lado1) *
      Math.sqrt(
        (semiPerimetro *
          (semiPerimetro - lado1) *
          (semiPerimetro - lado2) *
          (semiPerimetro - base)) /
          2
      );
    return altura;
  }
}
