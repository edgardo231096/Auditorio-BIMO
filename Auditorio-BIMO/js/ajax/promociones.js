var Promociones = (function($) {
    var baseUrl = "https://apis.bimo.com/promosapi";
    var apikey = "?api_key=np5jlomgamUPXSj2TQOqhQMbxlRjSDDjMA9M2Mqu";
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


    return {
        getAll: getAll
    }
})(jQuery);