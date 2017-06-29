$(document).ready(function() {
	$("#agregar").click(function(ev) {
		ev.preventDefault();
		var tareaNueva = $("#tarea").val();
		if(tareaNueva ==""){
			alert("Ingrese tareas en su lista"); 
		}else{
			$("#checkbox1").append("<input id="" type='checkbox' name='tarea'><label>" + tareaNueva + "</label><button id='borrar' class='btn-small right'>Eliminar</button><br>");
		}
		
	});
	$("#checkbox1 :checkbox").change(function() {
		$("#checkbox1").prop('checked', true);
        $("#checkbox1").prop('checked', false);
        if(this.checked){
        	$("")
        }
    }
});