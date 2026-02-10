function fnexamen() {
  let energia = document.querySelector(".funcion1").value;
  let watios = parseFloat(document.getElementById("funcion2").value);
  let precio = parseFloat(document.getElementById("funcion3").value);
  let usuario = document.getElementById("funcion4").value;
  let resultado = document.getElementById("resultado").value;
  alejandro25(energia,watios,precio,usuario,resultado);
}


function alejandro25(energia,watios,precio,usuario,resultado){
if (
    usuario == "rider" &&
    energia == "directa" &&
    watios > 30 &&
    watios < 50
  ) {
    total = (precio * watios);
    resultado = (`el usuario ${usuario}debe pagar: ${total} por ${watios} watios.`);
    document.getElementById("resultado").innerText = ("valido", resultado);
  } else if (
    usuario == "rider" &&
    energia == "orientacion" &&
    watios >= 60 &&
    watios <= 70
  ) {
    
    total = (precio / 2);
    resultado =(`el usuario ${usuario} con energia${energia} paga un precio ajustado: ${total}`);
    document.getElementById("resultado").innerText = ("invalido",resultado);
  } else {
    resultado = (`el precio y los watios estan fuera del rango permitido. `);
    document.getElementById("resultado").innerText = ("error",resultado);
  }
  alejo2005(total,usuario,energia);
}


function alejo2005(total,usuario,energia){
    let resultado = "";
    if (total >0){
        const descuento = total * 0.2;
        const apagar =total / 0.2;
        resultado =(`el usuario ${usuario} con energia ${energia} paga ${apagar} (dividido entre el 20% del total,descuento ${descuento}): ${total}`);
    }
    else{
        resultado = (`el precio y los watios estan fuera del rango permitido. `);
    }
    
    return resultado;

}
