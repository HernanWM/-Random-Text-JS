function generarTextoAleatorio (){
    let textoUno =['Hola', 'Adios', 'Como estas', 'Mucho Gusto' ];
const aleatorioFunctionUno = textoUno[Math.floor(Math.random() * textoUno.length)]
document.querySelector('#textCenterUno').innerHTML = aleatorioFunctionUno;
let textNombre = ['Andrew', 'Willy', 'Wally', 'Hernan', 'Carolina'];
const aleatorioFunctionDos = textNombre[Math.floor(Math.random() * textNombre.length)]
document.querySelector('#textCenterDos').innerHTML = aleatorioFunctionDos;

}
window.onload = () =>{
    generarTextoAleatorio();
}