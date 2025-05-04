// Mostramos todos los números del 00000 al 99999
for (let i = 0; i <= 99999; i++) {
    // Convertimos el número a cadena con 5 dígitos
    let numero = i.toString().padStart(5, "0");
  
    // Reemplazamos todos los '3' por 'E'
    let conE = numero.replaceAll("3", "E");
  
    console.log(conE);
  }
  