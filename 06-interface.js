$(document).ready(function() {
// Mover un elemento por la página
    $(".elemento").draggable();
    
    // Redimensionar un elemento
    $(".elemento").resizable();
    // Seleccionar Elementos
    // $(".lista-seleccionable").selectable();

    // Listar y ordenar elementos no podemos usar selectable y sortable juntos.
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });
    // Droppable Efecto de soltar y arrastrar
    $("#elemento-movido").draggable();
    // evento al introducir el drggable
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area");
        }
    });

    // Efectos
    $("#mostrar").click(function(){
        // $(".caja-efectos").toggle("fade");
        // $(".caja-efectos").toggle("explode");
        // $(".caja-efectos").toggle("blind");
        // $(".caja-efectos").toggle("slide");
        // $(".caja-efectos").toggle("drop");
        // $(".caja-efectos").toggle("fold");
        // $(".caja-efectos").toggle("puff");
        $(".caja-efectos").toggle("scale");
        // $(".caja-efectos").toggle("shake", 4000);
    });
    // un Tooltips es un pequeño popUp que aparece cuando pasa por encima de algún elemento
    $(document).tooltip();

    // Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });
    // Datepicker 
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
    
});