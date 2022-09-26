function ejecutar() {
    let opciones=$('#opciones').val();
    let invercion=Number($('#invercion').val());
    // para combertir un valor de panatalla debemos de ussar el prefijo Number para transformarlo
    let mensaje = ' ';
    let resultado = 0;
    switch (opciones) {
        case 'bit':
            resultado = invercion/(500000)
            mensaje ='Puedes comprar ' + resultado+' Bitcoin' + ' con $' + invercion
            break;
        case 'eth':
            resultado = invercion/20000
            mensaje ='Puedes comprar '+resultado+'Etherium' + ' con $' + invercion
            break;
        case 'dog':
            resultado = invercion/.60
            mensaje ='Puedes comprar '+resultado+' Dogecoin' + ' con $' + invercion
            break;
        case 'xrp':
            resultado = invercion/6
            mensaje ='Puedes comprar '+resultado+' xrp' + ' con $' + invercion
            break;
        default:
            alert = 'El resultado no existe '
            break;
    }
    // alerta para sweet alert
    swal (mensaje,resultado.toString(), 'success')
}
$(document).ready(function(){
    $('#btnCalcular').click(function(){
        ejecutar();
    });
});