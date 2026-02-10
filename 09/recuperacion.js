function fnalejo(){
let alejandro = document.querySelector(".alejandro").value;
let ulloa = document.querySelector("#ulloa").value;
console.log("mi nombre es :" + alejandro);
alejo01(alejandro,ulloa)
}
function alejo01(alejandro,ulloa){
    let uniondato = alejandro+ulloa;
document.getElementById("parrafo").innerText = uniondato;
document.getElementById("parrafo1").innerText = uniondato;
}
function alejo02(alejandro,ulloa){
   
let uniondato = alejandro+ulloa;
    return uniondato;
    
}
