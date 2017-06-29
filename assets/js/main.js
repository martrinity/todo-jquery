$(document).ready(function() {
	var counter = 0;
	$("#agregar").click(function(ev) {
		ev.preventDefault();
		var tareaNueva = $("#tarea").val();
		if(tareaNueva ==""){
			alert("Ingrese tareas en su lista"); 
		}else{
			$("#checkbox1").append("<input type='checkbox' name='tarea'><label>" + tareaNueva + "</label><button id='borrar' class='right'>Eliminar</button><br>");
		}
	});
});