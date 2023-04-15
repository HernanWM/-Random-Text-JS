//1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

let edad = prompt("Introduce tu edad");
    //COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
    if (Number(edad) == edad) {
        //SI ES MAYOR DE 18
        if (edad > 18) {
            //IMPRIME EN PANTALLA EL MENSAJE
            console.log("Puedes conducir");
        }
    }
    //SI NÓ    
    else {
        //MUESTRA UN MENSAJE
        console.log("No puedes conducir");
    }
