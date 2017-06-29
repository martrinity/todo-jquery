$(document).ready(function() {
	$("#agregar").click(function(ev) {
		ev.preventDefault();
		var tareaNueva = $("#tarea").val();
		if(tareaNueva ==""){
			alert("Ingrese tareas en su lista"); 
		}else{
			$("#checkbox1").before("<input type='checkbox' name='tarea'>" + tareaNueva + "</input><button id='borrar'>Eliminar</button>");
		}
	})
});