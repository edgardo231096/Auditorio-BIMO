var Eventos = (function($) {
    var baseUrl = "https://apis.bimo.com/eventosapi";
    var apikey = "?api_key=" + GlobalConfig.apikey;
    var getAll = function(cb) {
        $.ajax({
            url: baseUrl + "/all" + apikey,
            method: "get",
            async: true,
            success: function(data) {
                cb(data);
            },
            error: function(err) {
                console.log("Error in getAll ", err);
            }
        });
    }

    var eventosPorFolioArtista = function(folio_artista, cb) {
        var eventosByFolioEndpoint = `https://apis.bimo.com/eventosapi/datos_eventos/${folio_artista}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: eventosByFolioEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var asientosPorFuncionId = function(id_funcion, seccion, cb) {
        var asientosPorFuncionIdEndpoint = `https://apis.bimo.com/eventosapi/all-seats/${id_funcion}/${seccion}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: asientosPorFuncionIdEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var preciosPorEvento = function(folio_evento, cb) {
        var preciosPorEventoEndpoint = `https://apis.bimo.com/eventosapi/preciosporevento/${folio_evento}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: preciosPorEventoEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var guardarReservacion = function(no_tarjeta, cvc, cb){
        var params = (new URL(window.location.href)).searchParams;
        var saveEndpoint = `https://apis.bimo.com/eventosapi/save/${params.get("folio_artista")}/${params.get("funcion_id")}/${params.get("seccion")}/${params.get("asientos")}/${no_tarjeta}/${cvc}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: saveEndpoint,
            method: 'GET'
        })
        .done(function(resp){ cb(resp) })
        .fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }


    return {
        getAll: getAll,
        eventosPorFolioArtista: eventosPorFolioArtista,
        asientosPorFuncionId: asientosPorFuncionId,
        preciosPorEvento: preciosPorEvento,
        guardarReservacion: guardarReservacion
    }
})(jQuery);