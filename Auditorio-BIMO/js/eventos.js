function direccion(x,tit,sel,hr){
    var fecha=document.getElementById(sel.id).value;
    var titulo=document.getElementById(tit.id).innerHTML;
    var hora=document.getElementById(hr.id).innerHTML;
    var txt=hora.split(" "); 
    hora=txt[0]; 
    console.log(x.id," ",titulo," ",hora); 
    document.getElementById( x.id ).href += '?id='+x.id+'&titulo='+titulo+'&fecha='+fecha+'&hora='+hora;
}

$(document).ready(function() {
    Eventos.getAll(function(resp) {
        console.log(resp);
        $.each(resp, function(i, data){ 
            var funciones = "";
            if(data.funciones)
                $.each(data.funciones, function(i, fun){
                    funciones += `<option value="${fun.id}">${fun.fecha} - ${fun.hora}</option>`;
                });
            $("#carousel-container").append(`
            <div class="bloqArt">
            <div class="desc">
                 <div class="my-wrapper"> 
                    <div><img src="${data.imgurl}" alt="" class=" artista" />
                    <div class="detalles"> 
                    <h4>Lista de precios</h4>
                      <p> 
                         Seccion A2: $${data.precios.top}<br> 
                         Seccion A1 o A3: $${data.precios.mid}<br> 
                         Seccion B1 o B2: $${data.precios.low}<br>
                      </p>
                    </div> 
                    
                    </div>
                 </div>
                <div class="info">
                    <div class="mydraggable">
                    <span id="titulo1" class="titulo">"${data.nombre}"</span><br>
                    <span class="banda">${data.artistas}</span><br>
                    </div>
                    <select id="select1" class="selectFunciones"> 
                    ${funciones}
                    </select>
                </div>
            </div>
            <br>
            <div class="mydraggable">
                <span class="titulo">Descripción</span>
                <p>${data.descripcion}</p>
                <img class="patrocinador" src="../img/tecate.png">
                <img class="patrocinador" src="../img/bimbo.png">
                <img class="patrocinador" src="../img/coca.png">
            </div>
            <a class="boleto" id="1"  href="secciones.html" onclick="direccion(this, titulo1, select1, hora1)">Comprar</a>
        </div> 
            `);
        });
        $.getScript('../css/dist/jquery.carousel-3d.js');
    });
});

$(document).ready(function() {
    //$.getScript('../css/dist/jquery.carousel-3d.js');
})