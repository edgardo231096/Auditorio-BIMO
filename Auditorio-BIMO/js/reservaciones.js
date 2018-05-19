$(document).ready(function() { 
    var url = new URL(window.location.href);
    var no_tarjeta = parseInt(url.searchParams.get("no_tarjeta"));
   Eventos.eventosReservadosPorTitular(no_tarjeta, function(resp) {
       // console.log(resp); //si es igual a 1, deshabilitar botones laterales
        $.each(resp, function(i, data){  
             var asientos=data.asientos.split(",");
             console.log(asientos);
             Eventos.datosEventos(data.id_funcion, function(resp2) {
                //console.log(resp2);
                 $.each(resp2, function(i, data2){  
                     
                     $("#carousel-container").append(`
                   <div style="min-width: 360px; min-height: 213px; max-width: 360px;">
                   <div class="promo first">
                   <h4 class="mydraggable">${data2.nombre}</h4>
                   <ul class="features mydraggable">
                   <li class="brief">${data2.fecha} - ${data2.hora} hrs</li>
              <li class="price"><span>$${data.total}</span></li>
            </ul>
            <h5 class="mydraggable">Asientos en ${data.seccion}</h5>
            <ul class="features">
             <div class="mydraggable"> 
             ${asientos.forEach(function(elemento){"<li>* <strong>"+elemento+"</strong></li>"})}
             </div>
              <li class="buy">
                <button id="boton" onclick='functionProgress3(0,this);'>Imprimir Comprobante</button>
                <br><p>Fecha de Adquisición: ${data.fecha} a las ${data.hora}</p>
              </li>
            </ul>
          </div>
        </div>
                 `);
                 
                //-------------------------fin------------------------------------------------
             }); 
                     
                 });
                 
        }); $.getScript('../css/dist/jquery.carousel-3d.js'); 
}); 
    
});