function fnFlor(preciofrutas, numerodefrutas) {
    let numerodefrutas = document.getElementById("numero de frutas").value;
    let preciofrutas = document.getElementById("precio frutas").value;
    document.getElementById("parrafo").innerText = "numero de frutas es:" + numerodefrutas + " precio " + preciofrutas;
    console.log("numero de fruta es:" + numerodefrutas, preciofrutas);


    hola(numerodefrutas, preciofrutas)
}

function hola(numerodefrutas, preciofrutas) {
    datosunidos = otro(numerodefrutas, preciofrutas)
    document.getElementById("parrafo2").innerText = datosunidos;
    document.getElementById("parrafo3").innerText = datosDos;

}


function otro(numerodefrutas, preciofrutas) {
    datosDos = mas(numerodefrutas, preciofrutas);
    let datosunidos = numerodefrutas * preciofrutas;
    return datosunidos;
}


function mas(numerodefrutas, preciofrutas) {
    let datosDos = numerodefrutas / preciofrutas;
    return datosDos;
    let numero = florelia(datosDos);
    document.getElementById("parrafo2").innerHTML = numero;
}



function florelia(datosDos) {
    if (datosDos > 5) {
        return ("Correcto");
    }
    else {
        return ("incorrecto");
    }
}








//el return elmacena informacion 