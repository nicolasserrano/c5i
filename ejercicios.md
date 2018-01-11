El procesador costa de un
registro donde se realizan las operaciones y 100 posiciones de memoria
(numeradas de la 0 a la 99).

Las sentencias constan de
2 partes, el tipo de instrucción y la dirección de memoria a la que afecta.

Las instrucciones del
procesador son:  

| Instrucción | Descripción |
| ----- | ----- |
| ADD | suma al registro el contenido de la dirección de memoria |
| SUBTRACT | resta al registro el contenido de la dirección de memoria |
| READ | lee la dirección de memoria y la pone en el registro |
| WRITE | escribe el contenido del registro en la dirección de memoria |
| JUMP |si el registro es 0, salta a la instrucción indicado en la dirección de memoria |

#### Ejercicio a.1: Suma de dos números

Sumar los valores de las
casillas 90 y 91 (primera y segunda casilla de la última fila) y escribir el
resultado en la casilla 99.

#### Ejercicio a.2: Resta de dos números

Restar del valor de la
casilla 90, el valor de la casilla 91 y escribir el resultado en la casilla 99.

#### Ejercicio a.3: Operación con paréntesis

Restar de la suma de las
casillas 90 y 91, el valor de la suma de las casilla 92 y 93. (90 + 91) – (92 +
93). Realizando las operaciones en el orden indicado por los paréntesis.
Escribir el resultado en la casilla 99.

#### Ejercicio a.4: Escritura de números

Escribir en las casillas
50, 51, 52 y 53 el valor de la casilla 90.

#### Ejercicio a.5: Suma de numeros

En las casillas 50 a 54 hay 5 numeros.  
En las casillas 60 a 64 estan los valoes 0 o 1.
Realizar la suma de las casillas 50 a 54 que debajo tengan un 1. Escribir el resultado en la casilla 99

#### Ejercicio a.6: Escritura de n números

Escribir a partir de la
casilla 50 el valor de la casilla 90, el número de veces que indique la casilla
91.

Nota: es útil, escribir en
dos casillas los valores 0 y 1, por ejemplo en las casillas 80 y 81. En 80: 0,
en 81: 1.

#### Ejercicio a.7: Multiplicación

Modificar
el ejercicio anterior, para que, además de escribir el número en la posición
correspondiente (50, 51, ...), lo sume a la casilla 99, que se ha inicializado
al inicio del programa a 0. El resultado es que se obtiene la multiplicación de
los valores de las posiciones 90 y 91.

 Borrando las líneas de escritura en las
posiciones 50 y siguientes, resulta el algoritmo simple de multiplicación de 2 números
enteros.
