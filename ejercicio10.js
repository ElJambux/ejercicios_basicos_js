/**Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar
  let suma = 0;

  for (let i = 0; i < numberList.length; i++) {
    suma = suma + numberList[i];
  }

  return suma / numberList.length;
}

console.log("La media es de: " + average(numbers));
