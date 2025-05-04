let producto = 1;
let contador = 0;
let numero = 1;

while (contador < 10) {
  if (numero % 2 !== 0) {
    window.alert("Impar #" + (contador + 1) + ": " + numero);
    producto = producto * numero;
    contador = contador + 1;
  }

  numero = numero + 1;
}
window.alert("El producto de los 10 primeros números impares es: " + producto);