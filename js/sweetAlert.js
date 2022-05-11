/**-------------------------------------------**/
/**          alerta -- btn-- description      **/
/**-------------------------------------------**/

var title = "¿QUIENES SOMOS?"
var parrafo = "Somos una organización no gubernamental Colombiana sin animo de lucro Creada por el Pastor Pedro Ovidio Díaz Velásquez desde el año 2007 y esta enfocada en rescatar la niñez de los barrios de nuestra localidad de la pobreza extrema tanto física como espiritual."

$("#btn1").click(function(){
    Swal.fire({
        icon: 'info',
        title:'¿quienes somos?',
        html:'<p class="swal swal-parrafo">'+parrafo+'</p>',
        width: 600,
        padding: '2em',
        color: '#fff',
        background: '#3398db',
        backdrop: `
          rgba(0,0,123,0.5)
          left top
          no-repeat
        `
      });
});



