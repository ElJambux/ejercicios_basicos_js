//Dado el siguiente array:

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 - Saca a "Tendo" por consola atacando su posición.

console.log("Sacando a Tendo por consola atacando su posición: " + aldeanos[3]);

//4.2 - Coloca en el último lugar de este array a "Cervasio".

aldeanos.push("Cervasio");

console.log(
  "Colocando a Cervasio al final del array: " + aldeanos[aldeanos.length - 1]
);

//4.3 - Cambia el primer elemento de este array por "Bambina".

aldeanos[0] = "Bambina";

console.log("Primer elemento del array cambiado por: " + aldeanos[0]);

//4.4 - Dale la vuelta a este array.

aldeanos.reverse();

console.log("Array invertido:");
console.log("----------------");
console.log(aldeanos[0]);
console.log(aldeanos[1]);
console.log(aldeanos[2]);
console.log(aldeanos[3]);
console.log(aldeanos[4]);
console.log(aldeanos[5]);
console.log("----------------");

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

aldeanos.splice(4, 1, "Canela");

console.log("Narciso cambiado por Canela: " + aldeanos[4]);

//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente

console.log(
  "Último elemento del array sin atacar a la posición: " +
    aldeanos[aldeanos.length - 1]
);

// Pista: puedes usar el método length con algo más para ello.
