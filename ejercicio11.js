/**Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.s
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función: */

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  // Completar
  let suma = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "string") {
      suma = suma + list[i].length;
    } else {
      suma = suma + list[i];
    }
  }
  return suma / list.length;
}

console.log("El promedio mezclado total es de: " + averageWord(mixedElements));
