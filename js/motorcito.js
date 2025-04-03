/*funcionamiento de la licuadora*/

var estadoLicuadora = "apagado";
var sonidoLicuadora = document.getElementById( "blender-sound" );
var botonLicuadora = document.getElementById( "blender-button-sound" );
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if (estadoLicuadora=="apagado"){
        estadoLicuadora="encendido";
        hacerBrrBrr();
        licuadora.classlist.add("active");
    }else{
        estadoLicuadora="apagado";
        hacerBrrBrr();
        licuadora.classlist.remove("active");
    }
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.paused();
        sonidoLicuadora.currentTime=0;
    }
}