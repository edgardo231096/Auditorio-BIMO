$(document).ready(function(){
    Promociones.getAll(function(data) {
        $.each(data, function(i, promo){
            var finDate = (new Date(promo.fecha_fin)).toLocaleDateString('es-US');
            var delta = (promo.fecha_fin - (new Date()).getTime())/1000;
            var days = Math.floor(delta / 86400) + 1;
            var queryParams = "&num_promo=" + promo.num_promo + "&descuento=" + promo.descuento;
            $("#promosTable").append(`
            <tr>
                <td>${promo.descripcion}</td>
                
                <td>${finDate} ${(days > 0)?($(days == 1)?'(<b>Mañana</b> termina la promoción!)':('(Quedan '+days+' día(s))')):'(<b>Hoy</b> termina la promoción!)</b>'}</td>
                <td> <a href="eventos.html${window.location.search}${queryParams}" class="square_btn">Aplicar</a></td>
            </tr>
            `);
        });
    });
});