$(document).ready(function(){
    ! function(a) {
        a(function() {
            var flag=true; 
            a(".button-sent #back").hide(), a(".button-sent #continue").click(function(b) {
                if(flag===true){
                a("#area .master-card").css("transform", "rotateY(180deg)"), a(".button-sent #back").show()
                flag=false; 
                }else{
                    var cardNumber = $("#number-card1").val() + $("#number-card2").val() + $("#number-card3").val() + $("#number-card4").val(); 
                    var cardCvc = $("#card-cvc").val();
                    //folio_artista=1&funcion_id=0&seccion=A1&asientos=5_5,5_6,5_7
                    var url = new URL(window.location.href);
                    var funcion_id = parseInt(url.searchParams.get("funcion_id"));
                    var folio_artista = url.searchParams.get("folio_artista");
                    var seccion = url.searchParams.get("seccion");
                    var asientos = url.searchParams.get("asientos");
                    Eventos.guardarReservacion(cardNumber, cardCvc, function(resp) {
                        console.log("Resultado:", resp);
                    });
                }
            }), a(".button-sent #back").click(function(b) {
                a("#area .master-card").css("transform", "rotateY(0deg)"), a(this).hide()
                flag=true; 
            })
        })
    }(jQuery);
});