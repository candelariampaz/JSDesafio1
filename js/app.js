console.log ("Contactanos y calcula el costo de tu proyecto")

let nombre = prompt ("Ingrese su nombre")

let celular = prompt ("Ingrese su celular")
while(isNaN(celular)) {alert("No es un numero válido, ingrese su celular");
	celular = prompt("Ingresar un numero valido")}

let mail = prompt ("Ingrese su mail")

const newsletter = prompt ("Queres suscribirte a nuestro newsletter?").toLowerCase()
 switch (newsletter) {
 	case "si":
 		alert("A partir de ahora recibiras nuestras novedades")
 		break
 	case "no":
 		alert ("no te suscribiste, te esperamos la proxima!")
 		break
 	default:
 		alert("No ingresaste una respuesta válida")
 }

let presupuesto = prompt("Queres presupuestar tu proyecto?").toLowerCase()
if(presupuesto == "si"){
let ambientes = Number (prompt ("Ingrese la cantidad de ambientes a diseñar"))
	while(isNaN(ambientes)) {alert("No es un numero válido, ingrese numero de ambientes");
	ambientes = prompt("Ingresar un numero valido")
}
	function multiplicar(a, b) { return a * b}
	let resultado = multiplicar (ambientes, 10000)
	alert("Tu presupuesto aproximado es de $" + resultado + ". Cualquier consulta ponete en contacto con nosotros")
} 
else if (presupuesto == "no"){}
else { prompt("ingrese respuesta valida")}


let mensaje = prompt ("Dejanos tu consulta")