//Configuracion manual de la palabra this usando bind()
var myObject = {
    myFunction: function(a,b){
        console.log(a + '' + b);
        console.log(this === myObject);
        console.log(this === myOtherObject);
    }
};

var myOtherObject = {};
var myFunction = myObject.myFunction.bind(myOtherObject);
myFunction('hello','world');