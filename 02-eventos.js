$(document).ready(function(){
    // MouseOver y mouseout
    // Primero Seleccionamos elemento caja
    var caja = $("#caja");
    /*
    //Evento mouseover - hace una transición caja:hover pero la ejecuta una sola vez
    caja.mouseover(function(){
        $(this).css("background", "#FCA311");
    });
    // con este evento al salir el mouse de la caja hace otro hover y cambia bkground
    caja.mouseout(function(){
        $(this).css("background", "#fcbf49");
    });*/

    function cambiaRojo(){
        $(this).css("background", "red");
    };
    function cambiaVerde(){
        $(this).css("background", "green");
    };
    // Hover
    caja.hover(cambiaRojo, cambiaVerde);

    // Click, Doble Click, al hacer click se pone azul
    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
        console.log("Click");
    });
// Doble Clck - 
    caja.dblclick(function(){
        $(this).css("background", "pink")
                .css("color", "yellow");
        console.log("Click");
    });

// Focus y Blur - puedo hacer una acción cuando este en el foco o cuando esté fuera
// es recomendable crear una variable con el DOM $("#nombre") 
    var nombre =$("#nombre");
    var datos = $("#datos");
    nombre.focus(function() {
        $(this).css("border", "5px solid red");
        console.log("hola");
    });
// Blur- Si yo salgo del foco imprime el valor que le demos
    nombre.blur(function() {
        $(this).css("border", "3px solid ccc");
    $("#datos").text($(this).val()).show();
});
// Mousedown y mouseup
// Mientras esta pulsado tiene un estilo y cuando suelta cambia al otro.
datos.mousedown(function() {
    $(this).css("border-color", "green");
});
datos.mouseup(function() {
    $(this).css("border-color", "black");
});
// Mousemove - lo que hace es perseguir el ratón podría hacer que un div siguiera al ratón
$(document).mousemove(function() {
    $('body').css("cursor", "none");
    $("#sigueme").css("left", event.clientX)
                    .css("top", event.clientY);
});

});