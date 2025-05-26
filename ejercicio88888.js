/**Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  // Completar código
  let palabraMasLarga = "pal1";

  for (let i = 0; i < stringList.lenght; i++) {
    if (stringList[i].length > palabraMasLarga.length) {
      palabraMasLarga == stringList[i];
    }
  }
  return console.log("Es: " + palabraMasLarga);
}

findLongestWord(avengers);
