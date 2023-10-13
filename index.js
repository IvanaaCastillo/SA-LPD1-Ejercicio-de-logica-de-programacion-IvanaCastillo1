const prompt = require('prompt-sync')();
//No cambiar el nombre de la función ordenarNumeros

let numeroUno= parseInt(prompt("Ingresa el primer número: "));
let numeroDos= parseInt(prompt("Ingresa tu segundo número: "));

let numeroTres= parseInt(prompt("Ingresa tu tercer número: "));


function ordenarNumeros(num1, num2, num3) {
  let mayor, centro, menor;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("No ingresaste cifras válidas.");
    return null;
  }

  if (num1 === num2 && num2 === num3) {
    return "Los números son iguales";
  }

  if (num1 > num2 && num2 > num3) {
    mayor = num1;
    centro = num2;
    menor = num3;
  } else if (num2 > num3 && num3 > num1) {
    mayor = num2;
    centro = num3;
    menor = num1;
  } else if (num3 > num1 && num1 > num2) {
    mayor = num3;
    centro = num1;
    menor = num2;
  } else if (num1 > num3 && num3 > num2) {
    mayor = num1;
    centro = num3;
    menor = num2;
  } else if (num2 > num1 && num1 > num3) {
    mayor = num2;
    centro = num1;
    menor = num3;
  } else if (num3 > num2 && num2 > num1) {
    mayor = num3;
    centro = num2;
    menor = num1;
  } else {
    mayor = num1;
    centro = num2;
    menor = num3;
  }

  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

module.exports = ordenarNumeros;

const resultado = ordenarNumeros(numeroUno, numeroDos, numeroTres);
if (numeroUno === numeroDos && numeroTres === numeroDos) {
  console.log(resultado);
} else if (numeroUno === numeroDos){
  console.log("Tienes 2 números iguales: ", numeroUno)
} else if(numeroTres === numeroDos){
  console.log("Tienes 2 números iguales: ", numeroTres)
} else if(numeroUno === numeroTres){
  console.log("Tienes 2 números iguales: ", numeroUno)
} else {
  console.log("¿Que deseas saber?")
  console.log("a) Muestrame sólo el número mayor")
  console.log("b) Muestrame sólo el número central")
  console.log("c) Muestrame sólo el número menor")
  console.log("d) Ordena de menor a mayor")
  console.log("e) Ordena de mayor a menor")
  let orden = prompt("Ingresa tu respuesta: ").toLowerCase();
  if (orden === "a") {
  console.log(`El número mayor es: ${resultado.mayor}`)
  } else if (orden === "b"){
    console.log(`El número central es: ${resultado.centro}`)
  } else if (orden === "c"){
    console.log(`El número menor es: ${resultado.menor}`)
  } else if (orden === "d"){
    console.log(`Tus número ordenados de mayor a menor son ${resultado.ordenMayorAMenor}`)
  } else if (orden === "e"){
    console.log(`Tus número ordenados de menor a mayor son ${resultado.ordenMenorAMayor}`)
  } else{
    console.log("Alternativa incorrecta")
  }}