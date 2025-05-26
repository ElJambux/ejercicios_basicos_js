/**Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne, numberTwo) {
  // Completar código
  if (numberOne > numberTwo) {
    console.log(numberOne + " es más alto que " + numberTwo);
  } else {
    console.log(numberTwo + " es más alto que " + numberOne);
  }
}

greaterNumber(420, 360);
