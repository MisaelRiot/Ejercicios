//Declaración de funciones
function myFunction(){
    console.log(this === global);
}

myFunction(); //prints true