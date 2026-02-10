function fnevalua(){
    let numero4 = document.getElementById("Funcion3").value;
    let numero = numero4.length;

    if (numero<=6){
        alert("contraseña  correcta");
    }
    else{
        alert("contraseña  incorrecta");
    }

document.getElementById("resultado").innerText = "correcto" == numero4 == numero;
}

function fnevalua1(){
    let evaluar = document.getElementById("funcion2").value;
    let evaluar1 = document.getElementById("funcion1").value;

    if (evaluar==9){
        alert("usuario correcta");
        alert("contraseña correcta");
    }
    else{
        alert("usuario correcto");
        alert("contraseña incorrecta");
    }
}