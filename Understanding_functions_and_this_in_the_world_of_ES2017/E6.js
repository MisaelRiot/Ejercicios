// Expresion de funciones y hoisting
myFunction(); //TypeError: myFunction is not a function
var myFunction = function(){
    console.log('hi')
};