//funciones y objetos

var myObject = {
    myFunction: function(){
        console.log(this === myObject);
    }
};
myObject.myFunction();//prints true