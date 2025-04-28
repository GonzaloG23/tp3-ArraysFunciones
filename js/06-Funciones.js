function perimetro(numero1, numero2) {
  const resultado = 2 * (numero1 + numero2);
  {
    document.writeln("El perimero es: " + resultado);
  }
}

const num1 = parseInt(prompt("Ingrese un numero entero"))
const num2 = parseInt(prompt("Ingrese un segundo numero entero"))

perimetro (num1, num2);
