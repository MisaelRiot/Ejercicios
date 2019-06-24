// Aliasing functions (poniendo alias a las funciones)
var myObject = {
    myFunction: function(){
        console.log(this === myObject);
    }
};
myFunction = myObject.myFunction;//prints false
myFunction();