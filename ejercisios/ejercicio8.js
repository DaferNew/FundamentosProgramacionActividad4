let N = parseInt(prompt("¿Cuántos sueldos vas a ingresar?"));

let sueldoMaximo = 0;

for (let i = 1; i <= N; i++) {
  let sueldo = parseFloat(prompt("Ingresa el sueldo #" + i));

  if (sueldo > sueldoMaximo) {
    sueldoMaximo = sueldo;
  }
}

window.alert("El sueldo máximo es: $" + sueldoMaximo.toFixed(2));
