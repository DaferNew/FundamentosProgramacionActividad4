# FundamentosProgramacionActividad4
Repositorio de ejercicios de estructuras de control con JavaScript

Ejercicio 1: Cuadrados hasta número negativo

Entrada: el usuario ingresa un número.

Proceso:
  - Si es ≥ 0 → mostrar su cuadrado → pedir otro número.
  - Repetir hasta que ingrese un número negativo.

Salida:
  - Alertas con “El cuadrado del número es …”
  - Al final, alerta “Has ingresado un número negativo, gracias por participar.”

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 2: Adivina el número

Entrada: 
  - Usuario ingresa un número.
  - Programa genera un “número secreto” entre 0 y 100.

Proceso:
  Comparar:
   - Si el numero dado por el usuario > secreto → alerta “estás por encima”.
   - Si el numero dado por el usuario< secreto → alerta “estás por debajo”.
   - Pedir nuevo intento.
   - Repetir hasta acertar.

Salida:
   - Alertas “por encima” o “por debajo” en cada intento.
   - Al acertar → alerta “¡Le has atinado el número es X!”

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 3: Producto de los 10 primeros numeros impares

Entrada: 
No se ingresan datos manualmente. El programa genera los números impares automáticamente.

Valores iniciales:
   - producto = 1 → para almacenar el producto acumulado.
   - contador = 0 → cuenta cuántos impares se han procesado.
   - numero = 1 → número actual que se evalúa para ver si es impar.
     
Proceso:
  Se usa un ciclo while (contador < 10) para encontrar los 10 primeros números impares y calcular su producto:
Bucle while:
Repite mientras contador < 10.

Dentro del ciclo:
   - if (numero % 2 != 0): verifica si numero es impar.

Si lo es:
   - Muestra un mensaje: "Impar #<n>: <numero>".
   - Multiplica el valor actual de producto por numero.
   - Incrementa el contador.

Después de cada iteración (dentro o fuera del if), incrementa numero.

Salida:
 Cuando se han procesado 10 impares:
Se muestra una alerta

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 4: Factorial de un numero

Entrada: 
  - El programa comienza solicitando un número al usuario mediante un prompt.
  - Esa entrada es un texto, por lo tanto se convierte a número entero utilizando parseInt.

Proceso:
 Validación:
  - Se verifica si el valor ingresado es inválido, ya sea porque no es un número (isNaN(numero)) o porque es negativo (numero < 0).
  - Si el valor no es válido, se muestra un mensaje de error en la consola.

Cálculo del factorial (solo si el número es válido):
  - Se inicializa una variable llamada factorial con el valor 1.
  - Luego, se utiliza un bucle for que comienza en 1 y se repite hasta llegar al número ingresado.
  - En cada iteración, se multiplica factorial por el número actual del ciclo (i).
  - Así se va acumulando el producto de todos los números desde 1 hasta el número ingresado.

Salida:
   - Si la entrada fue incorrecta, el programa muestra en la consola el mensaje:
"Por favor, ingresa un número entero positivo."
   - Si la entrada fue válida y el cálculo se realizó correctamente, el programa muestra una ventana emergente (alert) con el resultado:
"El factorial de [número] es [resultado]."

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 5: Media de Numeros

Entrada: 
  - El programa solicita al usuario que ingrese 10 números, uno por uno.
Cada número se introduce mediante un prompt, y luego se convierte a número decimal usando parseFloat.

Proceso:
 Inicialización:
  - Se definen variables para acumular la suma y cantidad de números positivos, negativos y ceros.

Ciclo de entrada y clasificación:
  - Se usa un bucle for que se repite 10 veces. En cada vuelta:
  - Se pide un número al usuario.
  - Se convierte a número con parseFloat.
  - Se evalúa si el número es positivo, negativo o cero:
    - Si es positivo: se suma al total de positivos y se incrementa el contador de positivos.
    - Si es negativo: se suma al total de negativos y se incrementa el contador de negativos.
    - Si es cero: se incrementa el contador de ceros.

Cálculo de medias:
  - Después del bucle, se calculan las medias:
    - La media de positivos es la suma de positivos dividida entre la cantidad de positivos (solo si hay al menos uno).
    - Lo mismo para negativos.
    - Si no hay positivos o negativos, la media se asigna como 0 para evitar división por cero.

Salida:
   - Finalmente, el programa muestra tres mensajes en ventanas emergentes (alert):
     - La media de los números positivos.
     - La media de los números negativos.
     - La cantidad total de ceros ingresados.

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 6: Tablas de Muktiplicar

Entrada: 
  - Se solicita al usuario, mediante prompt, un número entero.
  - Ese número representa la tabla de multiplicar que el usuario desea calcular (por ejemplo, la tabla del 5).
  - El valor ingresado se convierte a número con parseInt.

Proceso:
  Validación del número:
  - Se verifica si el número ingresado está dentro del rango permitido: entre 0 y 10 inclusive.
  - Esto se evalúa con la condición: num <= 10 & num >= 0 (aunque debería usarse && en lugar de &).

Cálculo de la tabla (si es válido):
  - Si el número cumple con el rango:
  - Se ejecuta un bucle for que recorre del 1 al 10.
  - En cada iteración, se calcula el producto del número ingresado por el valor actual del bucle.

Salida:
 Si el número es válido:
  - Se muestran 10 resultados por consola y también 10 ventanas emergentes, cada una mostrando una línea de la tabla de multiplicar del número ingresado.

 Si el número está fuera de los parámetros:
  - Se muestra una sola ventana emergente con el mensaje:
"El numero no esta dentro de los parametros"

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 7: factura
Entrada: 
  - Durante 5 repeticiones (una por cada "factura"), el usuario debe ingresar los siguientes datos:
    - Código del artículo → número entero (parseInt)
    - Cantidad vendida en litros → número decimal (parseFloat)
    - Precio por litro → número decimal (parseFloat)
  - Estos datos se ingresan mediante prompt, uno a uno por cada factura.

Proceso:
 Cálculo de total por factura:
    - Se multiplica la cantidad de litros por el precio por litro para obtener el monto de la factura.
    - Ese total se va acumulando en facturacionTotal.
 Registro de litros vendidos por artículo:
    - Se guarda cuántos litros se han vendido por cada código de artículo.
    - Si el código aún no está registrado, se inicializa su valor en 0.
    - Luego se le suman los litros de esa factura.
 Conteo de facturas mayores a $600:
    - Si el total de una factura es mayor a 600, se incrementa el contador facturasMayores600.

Salida:
    - Al finalizar el bucle de las 5 facturas, el programa muestra tres resultados mediante ventanas emergentes (alert):
  Facturación total:
    - Muestra el total acumulado de todas las facturas, redondeado a 2 decimales.
  Litros vendidos por artículo:
    - Se imprime, por cada código, cuántos litros se vendieron en total.
  Cantidad de facturas mayores a $600:
    - Se muestra cuántas de las 5 facturas superaron los $600.

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 8: Sueldo mayor

Entrada: 
  - El usuario indica cuántos sueldos va a ingresar (N), a través de un prompt.
  - Luego, uno a uno, ingresa los valores de esos sueldos (parseFloat), también mediante prompt.

Proceso:
 Inicialización:
  - Se establece una variable sueldoMaximo en 0, que servirá para guardar el sueldo más alto.

 Bucle de lectura:
  - Un ciclo for se repite desde 1 hasta N, pidiendo un sueldo en cada vuelta.

 Comparación y actualización:
  - Dentro del ciclo, se compara el sueldo ingresado con el valor actual de sueldoMaximo.
    - Si el sueldo ingresado es mayor, se actualiza sueldoMaximo con ese nuevo valor.
    - Si no, no se modifica.
Salida:
   - Una vez finalizado el bucle, se muestra en pantalla (alert) el sueldo más alto que se haya ingresado, formateado con dos decimales.

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

Ejercicio 9: Remplazo Digitos 3 por E

Entrada: 
  - No hay entradas por parte del usuario.
  - El programa trabaja automáticamente con todos los números del 00000 al 99999 (100,000 combinaciones).

Proceso:
  Bucle for de 0 a 99999:
    - Se recorre cada número dentro de ese rango.

  Conversión a cadena de 5 dígitos:
    - Cada número se transforma a texto con 5 cifras usando:
i.toString().padStart(5, "0")
Ejemplo: 3 se convierte en "00003".

  Reemplazo de dígitos:
    - Dentro de esa cadena, todos los caracteres "3" se cambian por "E" usando:
replaceAll("3", "E")
Ejemplo: "00330" se transforma en "00EE0".

Salida:
   - En cada vuelta del bucle, se imprime en consola (console.log) el número convertido, con los '3' reemplazados por 'E'.
   - Salen 100,000 líneas en la consola, una por cada número del 00000 al 99999, modificadas si tenían algún '3'.

------///------///-------///--------///-------///-------///-------///--------//-/------///------///------///------///-------///-------///

