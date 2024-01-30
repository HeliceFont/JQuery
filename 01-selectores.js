$(document).ready(function(){
    console.log("jQuery y la web cargados...");
    // Selector de ID
$("#rojo").css("background", "red")
            .css("color", "white");
        
$("#amarillo").css("background", "yellow")
            .css("color", "green");
$("#verde").css("background", "green").css("color", "white");	

// Selectores de clases
//var mi_clase = $('.zebra').css("padding", "2px");
//mi_clase.css("border", "1px dashed black");
// Selectores de clases
$('.sin_borde').click(function(){
    console.log("click dado!!");
    $(this).addClass('zebra');
    
    });

// Selectores de etiqueta. este codigo quita el efecto zebra
var parrafos = $('p').css("cursor", "pointer");
parrafos.click(function(){
    $(this).removeClass("zebra");
});

// Selectores de atributos
$('[title= "Google"]').css('background', '#ccc')
                        .css("color", '#14213D');
$('[title = "helicex"]').css('background', '#FCA311')
                        .css("color", '#14213D');

// Otros selectores
// $('p, a').addClass('margen-superior');
// var busqueda = $("#caja").find('.resaltado');
// console.log(busqueda);

// Método .parent() sirve para avanzar en el html de elementos
// .eq en qué elemento me estoy posicionando
// así hemos seleccionado la caja del div
var busqueda = $("#caja .resaltado").eq(0).parent().parent().find('[title= "Google"]');
console.log(busqueda);
});

