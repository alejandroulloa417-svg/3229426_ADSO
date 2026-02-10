function fnvalidar1() {
  let numero = document.getElementById("txtNum1").value;
  let numero2 = document.getElementById("txtNum2").value;

  alert("el valor es" + numero);
  alert("el valor es" + numero2);

  document.getElementById("parrafo").innerText = "el resultado es" + numero;


}



function valida() {
  let numero = parseInt(document.getElementById("txtNum1").value);
  let numero2 = parseInt(document.getElementById("txtNum2").value);
  
  let llegomensaje = fnvalor(numero, numero2);
  document.getElementById("parrafo").innerText = llegomensaje;

}

function fnvalor(num, num2) {
  let mensaje = "";
  if (num >= num2) {
    mensaje = `numero mayor es:${num}`;
  } else {
    mensaje = `numero menor es:${num2}`;
  }
  return mensaje;
}



function fnsalidadivdividev(){
let num1= parseInt(document.getElementById("txtNum1").value);
  let num2 = parseInt(document.getElementById("txtNum2").value);
const recibedatofndivicionC = fndividecocientellamada(num1, num2);
console.log(`el cociente divicion de los datos: ${num1} / ${num2} es: ${recibedatofndivicionC}`);
document.getElementById(`divsalidadivideCoc`).innerText = `cociente al dividir: ${num1} / ${num2} = ${recibedatofndivicionC}`; 
}
function fndividecocientellamada(num1, num2){
  var resultadodivicion = parseInt(num1) / parseInt(num2);
  return resultadodivicion;
}
