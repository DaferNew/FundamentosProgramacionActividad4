let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingresa un número entero positivo.");
} else {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    window.alert(`El factorial de ${numero} es ${factorial}.`);
}
