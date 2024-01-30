$(document).ready(function() {
    $("#mostrar").hide();
    var caja = $("#caja");
    // mostrar y ocultar elementos - Usamos los métodos .show(); .hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        //$("#caja").show('fast');
        // $("#caja").fadeIn('normal');
        // $("#caja").fadeTo('slow', 1);
        $("#caja").slideDown('slow');

    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        //$("#caja").hide('fast');
        // $("#caja").fadeOut('normal');

        //  segundo parámetro la opacidad
        // $("#caja").fadeTo('slow', 0);
        caja.slideUp('slow');
    });

    $("#todoenuno").click(function() {
        caja.slideToggle('fast');

    });
// Animaciones personalizadas
    $("#animar").click(function() {
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '43px',
                        height: '110px',
                        
                    }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px',

            },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px',
                
            },'slow').animate({
                borderRadius: '100px',
                marginTop: '0px',
                
            },'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '43px',
                height: '110px',
                
            }, 'slow');
            
    });
});