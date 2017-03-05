function pesoPlaneta(){

	var peso = document.getElementById("peso").value
	var eleccion = document.getElementById("opciones")
	var elecciones = eleccion.options[eleccion.selectedIndex].value
	var regNum = /^[0-9]*$/;
	var gravedad = 0;
	var g_tierra = 9.8;

	//Según opción seleccionada

	switch(elecciones){

		case "mercurio":

			gravedad = 3.7;
			break;

		case "venus":

			gravedad = 8.9;
			break;

		case "marte":

			gravedad = 3.7;
			break;

		case "jupiter":

			gravedad = 24.8;
			break;

		case "saturno":

			gravedad = 10.4;
			break;

		case "urano":

			gravedad = 8.7;
			break;

		case "neptuno":

			gravedad = 11.2;
			break;

	}

	//Obligatorias y resultado

	if(peso.length == 0){
		alert("Rellene todos los campos");
	}else if(peso.search(regNum)){
		alert("Ingrese sólo números")
	}else if(elecciones == "0"){
		alert("Seleccione una opción");
	}else{
		alert("Tu peso en " + elecciones + " es " + (peso * gravedad / g_tierra).toFixed(0) + " kilos");
	}

}