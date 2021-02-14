//PARA SELECCIONAR TODA LA WEB
jQuery(document).ready(listo);

//PARA AGREGAR O QUITAR LA BARS
function listo(){
  jQuery(".bars").click(function(e){
    e.preventDefault();
    //AGREGA O QUITA EL OPEN
    jQuery("header .container nav").toggleClass("open");
    //AGREGA O QUITA LA X
    jQuery(".bars i").toggleClass("fa-times");
  });
  //ELEMENTOS a DEL NAV
  jQuery("header .container nav a").click(function(){
    //PARA REMOVER EL MENU X
    jQuery("header .container nav").removeClass("open");
    jQuery(".bars i").removeClass("fa-times");
    //FIN REMOVER MENU X

    var col = jQuery(this).attr("href");
    //PARA QUE SE MUEVA HASTA LA POSICION "a"
    jQuery("html,body").animate({
      "scrollTop": jQuery(col).offset().top -99
    })
  });
}
 