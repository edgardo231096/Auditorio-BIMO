$(document).ready(function() { 
    $("#reservarBtn").click(function(evt){
        evt.preventDefault();
        var queryParam = '&asientos=';
        var asientosNonUndefined = asientos.filter( x => x != undefined );
        $.each(asientosNonUndefined, function(i, elem) {
           queryParam += elem + (( i < asientosNonUndefined.length-1 )?",":"");
        });
        if(asientosNonUndefined.length > 0)
            window.location.href = 'pago_boletos.html' + window.location.search + queryParam;
    });

    var url = new URL(window.location.href);
    var funcion_id = parseInt(url.searchParams.get("funcion_id"));
    var folio_artista = url.searchParams.get("folio_artista");
    var seccion = url.searchParams.get("seccion");
    var eventosByFolioEndpoint = `https://apis.bimo.com/eventosapi/datos_eventos/${folio_artista}?api_key=np5jlomgamUPXSj2TQOqhQMbxlRjSDDjMA9M2Mqu`;

    document.getElementById("seccion").innerHTML = "Seccion: "+seccion+""; 
    /*document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("fecha").innerHTML = fecha+", "+hora+" hrs";
    */
    $.ajax({
        url: eventosByFolioEndpoint,
        method: 'GET'
    }).done(function(resp){
        document.getElementById("titulo").innerHTML = resp[0].nombre;
        $.each(resp[0].funciones, function(i, funcion){
            console.log(funcion);
            if(funcion.id == funcion_id) {
                document.getElementById("fecha").innerHTML = funcion.fecha+", "+funcion.hora+" hrs";
            }
        });
        
    }).fail(function(){
        alert("Error con la conexion al servidor...");
    });
});