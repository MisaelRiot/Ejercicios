// Expresiones de funciones nombradas
var myFunction= function myOtherFunction(recurse){
    if (recurse){
        myFunction(false);
        myOtherFunction(false);
    }
};
myFunction(true);
myOtherFunction(true); // ReferenceError: myOtherFunction is not defined