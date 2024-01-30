$(document).ready(function() {
    
    // Método Load - Nos permite hacer una petición ajax 
    // digamos que importa el HTML en el div
    
    // $("#datos").load("https://reqres.in/");

    //  Get y Post
    $.get("https://reqres.in/api/users?page=2", {page: 3}, function(response){
        response.data.forEach((element, index)=>{
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });
    var usuario ={
        name: "Victor Robles",
        email: "victorrobles@gmail.com"
        
    };
    

    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);
    });

    $("#formulario").submit(function(e){
        e.preventDefault();//quitar preconfiguración
        });
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });


        // $.ajax({
        //     type: 'POST',
        //     url: $(this).attr("action"),
        //     data: usuario,
        //     beforeSend: function(){
        //         console.log("enviando usuario");
        //     },
        //     success:function(response){
        //         console.log(response);
        //     },
        //     error: function(){
        //         console.log("A ocurrido un error");
        //     },
        //     timeout:50
        // });
    
         return false;//esto ejecuta que no te redirija de pagina
    });
