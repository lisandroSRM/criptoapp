function ejecutar() {
    let opciones=$('#opciones').val();
    let valor1=Number($('#valor1').val());
    let valor2=Number($('#valor2').val());
    // para combertir un valor de panatalla debemos de ussar el prefijo Number para transformarlo
    let mensaje = ' ';
    let resultado = 0;
    switch (opciones) {
        case 's':
            mensaje ='El resultado de la suma es  '
            resultado = valor1 + valor2
            break;
        case 'r':
            mensaje ='El resultado de la resta es  '
            resultado = valor1 - valor2
            break;
        case 'm':
            mensaje ='El resultado de la multiplicacion es  '
            resultado = valor1 * valor2
            break;
        case 'd':
            mensaje ='El resultado de la divicion es  '
            resultado = valor1 / valor2
            break;
        default:
            alert = 'El resultado no existe '
            break;
    }
    // alerta para sweet alert
    swal (mensaje,resultado.toString(), 'success')
}
$(document).ready(function(){
    $('#btnEjecutar').click(function(){
        ejecutar();
    });
});
