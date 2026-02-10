function fncalcularider()
{
    Nombre1 = document.querySelector("#txtnum1").value;
    Nombre2= document.querySelector("#txtnum2").value;
    Apellido1= document.querySelector(".txtnum1").value;
    Apellido2 = document.querySelector(".txtnum2").value;

    resultado = Nombre1 + Nombre2 + Apellido1 + Apellido2
    console.log("la suma de los datos: ",
        Nombre1, "+", Nombre2, "+", Apellido1, "+", Apellido2, "es: ", resultado);
        console.log(`la suma de los datos:
        ${Nombre1} + ${Nombre2} + ${Apellido1} + ${Apellido2} es: ${resultado}`);
        
        fnsalidaparrafo(Nombre1)
        fnalerta(Nombre2)

}


function fnalejandro()
{
    Año = document.querySelector("#txtnum1").value;
    Mes = document.querySelector(".txtnum2").value;
    Dia = document.querySelector(".txtnum3").value;

    fullData = Año + "/" + Mes + "/" + Dia;
    console.log("Tu fecha de nacimieno es: ", fullData);


    //Calcular edad
    //Let hoy= new Date();
    //Let FNacimiento = new Date(Año, Mes -1,Dia);
    //Let Edad = hoy.getFullYear() - FNacimiento.getFullYear();

    TotalDays = 30;
    TotalMonths = 12;
    TotalYears = 2025;

    T_Edad = TotalYears - Año;
    T_Meses = TotalMonths - Mes;
    T_Dias = TotalDays - Dia;

    console.log(`Tienes: ${T_Edad} años, ${T_Meses} y ${T_Dias} dias`);
}

