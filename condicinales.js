function fnvalidar() {
  let nombre = document.getElementById("txtNombre").value;
  let edad = document.querySelector(".txtEdad").value;

  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad`);
    if (edad > 35 && edad < 45) {
      console.log("machote");
    } else {
      console.log("maduro");
    }
  } else {
    if (nombre == "pablo") {
      console.log("muy bien");
    } else {
      console.log("muy mal");
    }
    console.log(`${nombre} es menor de edad`);
  }
}




















































