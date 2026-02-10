function fnejercicio(){
for (let i = 0; i <=10; i++) {
    console.log("numero ", i)
    document.getElementById("parrafo").innerHTML = i
}
}
function fnejercicio2(){
    let i = 0
    while (i <=100) {
        console.log("suma ", i)
        i++;
    }
}
function fnejercicio3(){
    for (let i = 0; i <=20; i++){
        if (i % 2 == 0)
            console.log(i + " es par")
    }
}
function fnejercicio4(){
    let i = 1;
    do{
        console.log("multiplique", i * 5);
        i++;
    }while (i <=10);
}