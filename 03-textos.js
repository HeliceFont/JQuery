$(document).ready(function() {

    reloadLinks();
    // Añadir el enlace que introducimos
    $('#add_button').click(function() {
        // con el método .html podemos seleccionar cualquier elemento que tenga en la web 
        // $('#menu').html('<li><a href="'+$('#add_link').val()+'"></a></li>');

        // El método .append AÑADE el enlace al final de la lista
        // Sin embargo .preppend lo AÑADE al principio de la lista
        // También podriamos usar .before antes que lo añade fuera de la lista
        $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
        reloadLinks();
    });


    $('a').each(function(index) {
        var that = $(this);
        // attr es la abreviatura de atributo
        var enlace =  that.attr("href");
        that.text(enlace);
    });
});

// vamos a hacer una función para reutilizarla
function reloadLinks(){
    $('a').each(function(index) {
        var that = $(this);
        var enlace =  that.attr("href");
        // a Este attr (atributo) le decimos 'target' objetivo-link '_blank' hoja en blanco 
        // abre enlace pestaña nueva
        that.attr('target', '_blank');
        that.text(enlace);

    });
};