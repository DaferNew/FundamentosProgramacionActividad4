let sumaPositivos = 0;
let sumaNegativos = 0;
let cantidadPositivos = 0;
let cantidadNegativos = 0;
let cantidadCeros = 0;

for (let i = 1; i <= 10; i++) {
  let input = prompt("Ingresa el número (negativos y positivos)" + i + ":");
  let numero = parseFloat(input);

  if (numero > 0) {
    sumaPositivos += numero;
    cantidadPositivos++;
  } else if (numero < 0) {
    sumaNegativos += numero;
    cantidadNegativos++;
  } else {
    cantidadCeros++;
  }
}

let mediaPositivos = cantidadPositivos > 0 ? (sumaPositivos / cantidadPositivos) : 0;
let mediaNegativos = cantidadNegativos > 0 ? (sumaNegativos / cantidadNegativos) : 0;

window.alert("Media de números positivos: " + mediaPositivos);
window.alert("Media de números negativos: " + mediaNegativos);
window.alert("Cantidad de ceros: " + cantidadCeros);
