function fnejercicio1(){
    let numero = document.getElementById("txtFuncion").value;

    if (numero > 5){
        console.log("el numero es positivo");
        alert("el numero es positivo");
    }
    
    else{
        console.log("el numero es negativo");
        alert("el numero es negativo");
    }
}


function fnejercicio2(){
    let numero2 = document.getElementById("Funcion").value;

    if (numero2 >=18){
        console.log("es mayor de edad");
        alert("es mayor de edad");
    }

    else{
        console.log("es menor de edad");
        alert("es menor de edad");
    }
}

function fnejercicio3(){
    let numero3 = document.getElementById("Funcion1").value;

    if (numero3 %2==0){
        console.log("el numero es par");
        alert("el numero es par");
    }
    else{
        console.log("el numero es impar");
        alert("el numero es impar")
    }
}


function fnejercicio4(){
    let numero4 = document.getElementById("Funcion3").value;
    let numero = numero4.length;

    if (numero==8){
        alert("contraseña valida");
    }
    else{
        alert("contraseña demasiado corta");
    }
}


