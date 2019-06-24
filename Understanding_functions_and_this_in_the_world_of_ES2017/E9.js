//Configuracion manual de la palabra this usando call()
var myObject = {
    myFunction: function(a,b){
        console.log(a + ' ' + b);
        console.log(this === myObject);
        console.log(this === myOtherObject);
    }
};

var myOtherObject = {};
myObject.myFunction.apply(myOtherObject, ['hello','world']);
