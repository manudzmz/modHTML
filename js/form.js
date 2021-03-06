if (!Modernizr.inputtypes.date){
	$('<link/>', {
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css'
	}).appendTo('head');

	$.getScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js')
		.done(function(){
			$('input[type="date"]').datepicker({
				dateFormat: "yy-mm-dd"
			});
		});
}

if (!Modernizr.inputtypes.number){
	$.getScript('number-polyfill.js');
}


var form = document.getElementById('form-contact');

var loadingButton = document.createElement('i');
if (Modernizr.classList){
	loadingButton.classList.add("fa", "fa-spinner", "fa-spin");
} else {
	loadingButton.className += "fa fa-spinner fa-spin";
}

var apellidosInput = document.getElementsByName("tienes_apellidos");
var tooManyEnemies = document.getElementById('too-many-enemies');
var ejercitoInput = document.getElementById('ejercito');

var inputApellidos = document.createElement('input');
inputApellidos.setAttribute('id', 'apellidos');
inputApellidos.setAttribute('type', 'text');
inputApellidos.setAttribute('name', 'apellidos');
inputApellidos.setAttribute('placeholder', 'Apellidos');
inputApellidos.setAttribute('required', '');

for (var i = 0; i < apellidosInput.length; i++){
	apellidosInput[i].addEventListener('click', function(){
		if (this.value == 'yes') {
			this.parentNode.appendChild(inputApellidos);
		} else {
			if (document.getElementById('apellidos')){
				this.parentNode.removeChild(inputApellidos);
			}
		}
	});
}

ejercitoInput.addEventListener('keyup', function(e){
	if (parseInt(this.value) > 50) {
		tooManyEnemies.style.display = 'block';
	} else {
		tooManyEnemies.style.display = 'none';
	}
});


form.addEventListener('submit', function(e){
	var inputNombre = document.getElementById('nombre');
	var apellidosRadioInput = {
		"apellidos_si": document.getElementById('apellidos_si'),
		"apellidos_no": document.getElementById('apellidos_no')
	};
	var emailInput = document.getElementById('email');
	var misionesRadioInput = {
		'mision1': document.getElementById('tipo_mision_1'),
		'mision2': document.getElementById('tipo_mision_2'),
		'mision3': document.getElementById('tipo_mision_3'),
		'mision4': document.getElementById('tipo_mision_4')
	};
	var estasSeguroRadioInput = {
		"seguro_si": document.getElementById('seguro_si'),
		"seguro_no": document.getElementById('seguro_no')
	}

	var fechaInput = document.getElementById('fecha');
	var submitInput = document.getElementById('enviar');

	if (inputNombre.checkValidity() == false) {
		alert('Escribe tu nombre');
		inputNombre.focus;
		e.preventDefault();
		return false;
	}

	if (apellidosRadioInput.apellidos_si.checkValidity() == false) {
		alert('Selecciona si tenes apellidos');
		e.preventDefault();
		return false;
	}

	if (document.getElementById('apellidos')) {
		if (document.getElementById('apellidos').checkValidity() == false) {
			alert('Escribe tus apellidos');
			document.getElementById('apellidos').focus;
			e.preventDefault();
			return false;
		}
	}

	if (emailInput.checkValidity() == false) {
		alert ('Escribe tu email');
		emailInput.focus;
		e.preventDefault();
		return false;
	}

	if (misionesRadioInput.mision1.checkValidity() == false) {
		alert('Selecciona el tipo de misión');
		e.preventDefault();
		return false;
	}

	if (tooManyEnemies.style.display === 'block') {
		if (estasSeguroRadioInput.seguro_si.checkValidity() == false) {
			alert('Confirma que estás seguro');
			e.preventDefault();
			return false;
		}
	}

	if (fechaInput.checkValidity() == false) {
		alert('Introduce la fecha de la misión');
		fechaInput.focus;
		e.preventDefault();
		return false;
	}

	submitInput.appendChild(loadingButton);
	e.preventDefault();

	setTimeout(function(){
		submitInput.removeChild(loadingButton);
		sendNotification("Formulario recibido", "Yo soy el body");
	}, 1000);
})