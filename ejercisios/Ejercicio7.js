
let facturacionTotal = 0;
let litrosPorArticulo = {}; 
let facturasMayores600 = 0;

for (let i = 1; i <= 5; i++) {
  let codigo = parseInt(prompt("Factura #" + i + ": Ingrese el código del artículo"));
  let litros = parseFloat(prompt("Factura #" + i + ": Ingrese la cantidad vendida en litros"));
  let precio = parseFloat(prompt("Factura #" + i + ": Ingrese el precio por litro"));

  let totalFactura = litros * precio;
  facturacionTotal += totalFactura;

  if (!litrosPorArticulo[codigo]) {
    litrosPorArticulo[codigo] = 0;
  }
  litrosPorArticulo[codigo] += litros;

  if (totalFactura > 600) {
    facturasMayores600 += 1;
  }
}

window.alert("Facturación total: $" + facturacionTotal.toFixed(2));
window.alert("Litros vendidos por artículo:");
for (let codigo in litrosPorArticulo) {
    window.alert(" - Artículo " + codigo + ": " + litrosPorArticulo[codigo] + " litros");
}
window.alert("Facturas mayores a $600: " + facturasMayores600);

