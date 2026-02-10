function fncajas(){
    let numero1 = parseInt(document.getElementById("txtnumero1").value);
    let numero2 = parseInt(document.getElementById("txtnumero2").value);
    let operacion = document.getElementById("operacion").value; 
    try {
        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("ingresa valor valido");
        }
        if (!operacion) {
            throw new Error("selecciona operación");
        }

        let resultadofinal;
        switch (operacion) {
            case "suma":
                resultadofinal =  fnsumados (numero1, numero2); 
                break;
            case "resta":
                resultadofinal = fnresta(numero1, numero2);
                break;
            case "multiplicacion":
                resultadofinal = fnmultiplicacion(numero1, numero2);
                break;
            case "ciclofor":
                resultadofinal= fnciclos(numero1, numero2)
                break;
            default:
                throw new Error("operación no valida");
        }

        document.getElementById("parrafo").innerHTML =`El resultado de la operación ${operacion} es: ${resultadofinal}`;
        document.getElementById("pfosalida").classList.remove("error"); 
        let mensaje= fnpareimpar(resultadofinal);
            document.getElementById("parrafo1").innerHTML= mensaje;
            document.getElementById("parrrafo2").textContent="resultado es " + mensaje;
        
    } catch (error) {
        document.getElementById("parrafo3").classList.add("error");
        document.getElementById("parrafo4").textContent = error.mensaje;
    } finally {
        console.log("terminamos");
    }
}
function fnsumados(numero1, numero2){
    let resuma= numero1 + numero2;
    return resuma
}
function fnresta(numero1, numero2) {
    let resresta = numero1 - numero2;
    return resresta;
}

function fnmultiplicacion(numero1, numero2) {
    let remultiplicacion = numero1 * numero2;
    return remultiplicacion;
}
function fnpareimpar(resultadofinal) {
    let mensaje;
    if (resultadofinal % 2 === 0) {
        mensaje = `${resultadofinal} es par`;
    } else {
        mensaje = `${resultadofinal} es impar`;
    }
    return mensaje;
}
function fnciclos(numero1, numero2) {
    let incremento = parseInt(document.getElementById("txtnumero3").value);
    let resultado = " ";
    for (let i = numero1; i <= numero2; i = i + incremento) {
        console.log(`mi dato ${i} es :${i}`);
        resultado  += i + " "}

    document.getElementById("parrafo5").innerHTML= resultado;
    
    return incremento;
}