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


    return {
        getAll: getAll,
        eventosPorFolioArtista: eventosPorFolioArtista
    }
})(jQuery);