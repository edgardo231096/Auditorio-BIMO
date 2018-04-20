function direccion(x,tit,sel,hr){
    var fecha=document.getElementById(sel.id).value;
    var titulo=document.getElementById(tit.id).innerHTML;
    var hora=document.getElementById(hr.id).innerHTML;
    var txt=hora.split(" "); 
    hora=txt[0]; 
    console.log(x.id," ",titulo," ",hora); 
    document.getElementById( x.id ).href += '?id='+x.id+'&titulo='+titulo+'&fecha='+fecha+'&hora='+hora;
}