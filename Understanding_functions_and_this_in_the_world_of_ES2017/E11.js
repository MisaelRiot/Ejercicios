// Notación corta de objetos
// Object shorthand notation

const myObject = {
    myFunction(){
        console.log(this === myObject);
    }
};

myObject.myFunction();//prints true
const myFunction = myObject.myFunction;
myFunction();//prints false
