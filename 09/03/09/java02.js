function fnalejandro()
{
    let text =  document.querySelector("#num1").value;
    let arroz = document.querySelector(".num2").value;
    let text2 = document.querySelector(".num3").value;
    let frijol = document.querySelector("#num4").value;
    let text3 = document.querySelector("#num5").value;
    let lentejas = document.querySelector(".num6").value;

    let resultado = Number(text2) * Number(frijol);
    
    let resultado2 = Number(text) * Number(arroz);
    
    let resultado3 = Number(text3) * Number(lentejas);
    

    let resultad6 = resultado + resultado2 + resultado3;
    document.getElementById("caja5").innerText ="su total es " + resultad6;
inprimeresultado(resultado);
alejo(resultado2);
ulloa(resultado3);
}

function inprimeresultado(resultado7){
document.getElementById("caja3").innerText = resultado7;
}
function alejo (rodriguez) {
    document.getElementById("caja2").innerText = rodriguez;
}
function ulloa(luis){
    document.getElementById("caja4").innerText = luis;
}
