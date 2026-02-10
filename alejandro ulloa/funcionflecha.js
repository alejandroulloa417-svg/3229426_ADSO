function sumar(num1,num2) {
    return num1 + num2;
}
function saludar(nombre){
    return "hola, " + nombre + "¿!";   
}
function multiplicacion(num1,num2){
    return num1 * num2;
}
function division(num1,num2){
    return num1 / num2;
}
let sumarflecha = (num1,num2) => num1 + num2;

let saludarflecha = nombre => "hola, " + nombre + "!";

let obtenerMensajeflecha = () => "Bienvenido coderider";
let multiplicacionFlecha = (num1,num2) => num1 * num2;
let divisionFlecha = (num1,num2) => num1 / num2;

function ejecutarOpcion() {
    let opcion = document.getElementById("opcion").value;
    let resultado = document.getElementById("resultado");
    let num1 = parseInt(document.getElementById("txtnumero1").value);
    let num2 = parseInt(document.getElementById("txtnumero2").value);
    let nombre = document.getElementById("txtnumero3").value;
    let salida = "";
    
    switch (opcion) {

        case "division":
            salida = "resultadoo: " + division(num1,num2);
            break;
        case "divisionFlecha":
            salida = "resultado:" + divisionFlecha(num1,num2);
            break;
        case "sumanormal":
            salida = "resultado: " + sumar(num1,num2); 
            break;
        case "multiplicacion":
            salida = "resultado: " + multiplicacion(num1,num2);
            break;
        case "multiplicacionFlecha":
            salida = "resultado: "  + multiplicacionFlecha(num1,num2);
            break;
        case "sumaflecha":
            salida = "resultado: " + sumarflecha(num1,num2); 
            break;
        case "saludonormal":
            salida = saludar(" " + nombre); 
            break;
        case "saludoflecha":
            salida = saludarflecha("coderider"); 
            break;
        case "mensaje":
            salida = obtenerMensajeflecha(); 
            break;
        default:
            salida = "selecciona una opcion valida.";
    }
    resultado.textContent = salida;
} 

