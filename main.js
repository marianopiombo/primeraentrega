function pedirAlfajor (){

const precioAlfajor = 150
let dineroUsuario = parseFloat(prompt("ingresa 150$ pesos para recibir tu alfajor"))
if(isNaN(dineroUsuario)){

    alert("no ingresaste dinero , intentalo de nuevo ")
    return 
}

while ( dineroUsuario < precioAlfajor ){
    const dineroFaltante = precioAlfajor - dineroUsuario
    alert("dinero insuficiente, te faltan $"+ dineroFaltante)
    dineroUsuario = parseFloat(prompt("volver a ingresar dinero "))
    
}
const cambio = dineroUsuario - precioAlfajor
alert("gracias por tu compra , este seria tu vuelto $" + cambio)    
}

pedirAlfajor()