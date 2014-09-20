/* Variables */
var menu = $('.menu');
var search = $('.search');
var icono = $('.icon-search');
var bar = $('#bar');

/* Función para el estado focus(dentro) */
search.focusin(function(){
	search.css('width', '20%');
	menu.css('width', '80%');
	icono.css('color', '#000');
	bar.css('color', '#000');
});

/* Función para el estado focus(por afuera) */
search.focusout(function(){
	search.css('width', '15%');
	menu.css('width', '85%');
	icono.css('color', '#fff');
	bar.css('color', '#fff');
});