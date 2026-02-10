function fnalejandro(numero1,numero2){


let numero = parseInt(document.getElementById("txtNum1").value);
  let numero2 = parseInt(document.getElementById("txtNum2").value);

  let llegomensaje = fnvalor(numero, numero2);

  document.getElementById("parrafo").innerText = llegomensaje;
  let mensaje = "";
  if (num >= num2) {
    mensaje = `numero mayor es:${num}`;
  } else {
    mensaje = `numero mayor es:${num2}`;
  }
  return mensaje;
}